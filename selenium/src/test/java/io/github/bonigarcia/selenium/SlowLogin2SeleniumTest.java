/*
 * (C) Copyright 2024 Boni Garcia (https://bonigarcia.github.io/)
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
package io.github.bonigarcia.selenium;

import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;
import static org.assertj.core.api.Assertions.assertThat;
import static org.openqa.selenium.OutputType.FILE;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

class SlowLogin2SeleniumTest {

    WebDriver driver;

    @BeforeEach
    void setup() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-search-engine-choice-screen");
        driver = new ChromeDriver(options);
    }

    @Test
    void test() throws Exception {
        // Open system under test (SUT)
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://bonigarcia.dev/selenium-webdriver-java/login-slow.html");

        // Log in
        driver.findElement(By.id("username")).sendKeys("user");
        driver.findElement(By.id("password")).sendKeys("user");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        // Assert expected text
        WebElement successElement = driver.findElement(By.id("success"));
        assertThat(successElement.getText()).contains("Login successful");

        // Take screenshot
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(FILE); // stored by default in tmp folder
        Path destination = Paths.get("login-selenium.png");
        Files.move(screenshot.toPath(), destination, REPLACE_EXISTING);
    }

    @AfterEach
    void teardown() {
        driver.quit();
    }

}
