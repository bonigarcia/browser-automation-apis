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
package io.github.bonigarcia.playwright;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class HelloWorldPlaywright {

    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            // Open Chromium
            Browser browser = playwright.chromium().launch();
            Page page = browser.newPage();

            // Navigate to web page
            String url = "https://bonigarcia.dev/selenium-webdriver-java/";
            page.navigate(url);

            // Check page title
            String title = page.title();
            System.out.println(
                    String.format("The title of %s is %s", url, title));
        } // Close Chromium
    }

}
