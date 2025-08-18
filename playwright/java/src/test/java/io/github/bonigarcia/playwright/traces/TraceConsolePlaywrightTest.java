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
package io.github.bonigarcia.playwright.traces;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

class TraceConsolePlaywrightTest {

    Browser browser;
    Page page;

    @BeforeEach
    void setup() {
        browser = Playwright.create().chromium()
                .launch(new BrowserType.LaunchOptions().setHeadless(false));
        page = browser.newContext().newPage();
    }

    @Test
    void test() {
        List<String> logs = new ArrayList<>();

        // Capture console messages
        page.onConsoleMessage(msg -> {
            String log = "[console " + msg.type() + "] " + msg.text();
            System.out.println(log);
            logs.add(log);
        });

        // Capture unhandled exceptions
        page.onPageError(err -> {
            String log = "[page error] " + err;
            System.out.println(log);
            logs.add(log);
        });

        // Open system under test (SUT)
        page.navigate(
                "https://bonigarcia.dev/selenium-webdriver-java/console-logs.html");

        // Assert logs
        assertThat(logs).hasSizeGreaterThanOrEqualTo(5);
    }

    @AfterEach
    void teardown() {
        browser.close();
    }

}
