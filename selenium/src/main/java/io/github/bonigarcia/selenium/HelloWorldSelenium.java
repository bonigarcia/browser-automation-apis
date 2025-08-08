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
package io.github.bonigarcia.selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HelloWorldSelenium {

    public static void main(String[] args) {
        // Open Chrome
        WebDriver driver = new ChromeDriver();

        // Navigate to web page
        String url = "https://bonigarcia.dev/selenium-webdriver-java/";
        driver.get(url);

        // Check page title
        String title = driver.getTitle();
        System.out.println(String.format("The title of %s is %s", url, title));

        // Close Chrome
        driver.quit();
    }

}
