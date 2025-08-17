/*
 * (C) Copyright 2025 Boni Garcia (https://bonigarcia.github.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
package io.github.bonigarcia.playwright.trace;

import static org.assertj.core.api.Assertions.assertThat;

import java.nio.file.Paths;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.Tracing;

class TraceLoginPlaywrightTest {

    static Playwright playwright;
    static Browser browser;
    BrowserContext context;
    Page page;

    @BeforeAll
    static void launchBrowser() {
        playwright = Playwright.create();
        browser = playwright.chromium()
                .launch(new BrowserType.LaunchOptions().setHeadless(false));
    }

    @BeforeEach
    void createContextAndPage() {
        context = browser.newContext();

        // Start tracing
        context.tracing().start(new Tracing.StartOptions().setScreenshots(true)
                .setSnapshots(true).setSources(true));

        page = context.newPage();
    }

    @Test
    void test() {
        // Open system under test (SUT)
        page.navigate(
                "https://bonigarcia.dev/selenium-webdriver-java/login-form.html");

        // Log in
        page.fill("#username", "user");
        page.fill("#password", "user");
        page.click("button[type='submit']");

        // Assert expected text
        String successText = page.textContent("#success");
        assertThat(successText).contains("Login successful");
    }

    @AfterEach
    void closeContext() {
        context.tracing().stop(new Tracing.StopOptions()
                .setPath(Paths.get("login-traces.zip")));
        context.close();
    }

    @AfterAll
    static void closeBrowser() {
        playwright.close();
    }

}
