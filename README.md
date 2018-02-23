# z3r0-selenium-webdriver-io

This project contains examples of automation scripts written in JavaScript, utilizing WebDriver bindings for Node.js (webdriver.io).

Individual tests can be found here:

https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/tree/master/test/specs


## Running the tests

1. Clone the repo - git clone https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io.git
1. From root directory perform npm i.
1. Download the latest geckodriver:

    Linux 64 bit : curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-linux64.tar.gz | tar xz

    OSX: curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-macos.tar.gz | tar xz

1. Start selenium standalone server:

    java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar

1. Download required webdrivers for chrome:

https://www.seleniumhq.org/download/

1. From root, run npm test to run all tests on all supported browsers.


## About the tests

#### googleTest.js

The googleTest.js script navigates to google.com, enters a search term and submits a search. It includes a browser.execute() workaround for hiding auto-suggested search terms that can interrupt the search submission button click on some browsers.

#### webDriverIoTest.js

The webDriverIoTest.js script navigates to webdriver.io home page and clicks the API link in the header. It then proceeds to load all children within the Actions section and display them in the console.

#### redditTest.js

The redditTest.js script navigates to the reddit home page, and parses for the top ten entries, skipping any promoted ones. Once the entries are parsed, the script outputs the top 10 reddit entries to the console in formatted json. The script includes a workaround for a modal that intermittently prompts the user to sign up to reddit.
