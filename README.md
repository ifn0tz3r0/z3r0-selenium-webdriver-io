# z3r0-selenium-webdriver-io

This project contains examples of automation scripts written in JavaScript, utilizing WebDriver bindings for Node.js (webdriver.io).

Individual tests can be found here:

https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/tree/master/test/specs

https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/blob/master/test/specs/google/googleTest.js
https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/blob/master/test/specs/reddit/redditTest.js
https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/blob/master/test/specs/webdriverio/webDriverIoTest.js

## Supported browsers

* chrome
* firefox
* headless (chrome)

## Running the tests

1. Clone the repo.

    ```
    git clone https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io.git
    ```
1. From root directory perform npm i.

    ```
    npm i
    ```

1. Download the latest geckodriver, move it to the project root directory.

    Linux 64 bit:
    ```
    curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-linux64.tar.gz | tar xz
    ```
    OSX:
    ```    
    curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-macos.tar.gz | tar xz
    ```

1. Start selenium standalone server:

    ```
    java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar
    ```

1. Download required webdrivers for chrome, move them to the project root directory.

    https://www.seleniumhq.org/download/

1. From root, run npm test to run all tests on all supported browsers.

    ```
    npm run test
    ```

## About the tests

#### googleTest.js



![](https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/blob/master/img/google.gif)

The googleTest.js script navigates to google.com, enters a search term and submits a search. It includes a browser.execute() workaround for hiding auto-suggested search terms that can interrupt the search submission button click on some browsers.

```
navigating to http://www.google.com
verifying page title is 'Google'
entering search term 'automation'
attempting to set value of search input
submitting search
attempting to click search submit
verifying url contains/starts with 'https://www.google.com/search?'
```

#### webDriverIoTest.js

![](https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/blob/master/img/webdriver.gif)

The webDriverIoTest.js script navigates to webdriver.io home page and clicks the API link in the header. It then proceeds to load all children within the Actions section and display them in the console.

```
navigating to http://webdriver.io/
verifying page title is 'WebdriverIO - WebDriver bindings for Node.js'
attempting to click api link
verifying number of actions is 17
printing children values of actions parent div
................................
addValue :: http://webdriver.io/api/action/addValue.html
clearElement :: http://webdriver.io/api/action/clearElement.html
click :: http://webdriver.io/api/action/click.html
doubleClick :: http://webdriver.io/api/action/doubleClick.html
dragAndDrop :: http://webdriver.io/api/action/dragAndDrop.html
leftClick :: http://webdriver.io/api/action/leftClick.html
middleClick :: http://webdriver.io/api/action/middleClick.html
moveToObject :: http://webdriver.io/api/action/moveToObject.html
rightClick :: http://webdriver.io/api/action/rightClick.html
selectByAttribute :: http://webdriver.io/api/action/selectByAttribute.html
```

#### redditTest.js

![](https://github.com/ifn0tz3r0/z3r0-selenium-webdriver-io/blob/master/img/reddit.gif)

The redditTest.js script navigates to the reddit home page, and parses for the top 10 entries, skipping any promoted ones. Once the entries are parsed, the script outputs the top 10 reddit entries to the console in formatted json. The script includes a workaround for a modal that intermittently prompts the user to sign up to reddit.

```
navigating to http://reddit.com/
verifying page title is 'reddit: the front page of the internet'
signup modal dectected: div[id='onboarding-splash']
attempting to click signup - skip for now
there are a total of 26 entries...
...skipping promoted entry...
[
	{
		"rank": 1,
		"title": "Clear night sky reflecting on the Merced River at one of my favorite spots in Yosemite [OC] [3308x4376]",
		"author": "Dyatlovpass",
		"href": "https://i.imgur.com/LFTAY9L.jpg",
		"subreddit": "r/EarthPorn"
	},
	{
		"rank": 2,
		"title": "You would not believe how many tries this took me.",
		"author": "notseano",
		"href": "https://www.reddit.com/r/gifs/comments/7zkuqn/you_would_not_believe_how_many_tries_this_took_me/",
		"subreddit": "r/gifs"
	},
	{
		"rank": 3,
		"title": "Billboard removal in Toronto reveals original Spaceballs advertisement",
		"author": "CrispyMiner",
		"href": "https://www.reddit.com/r/mildlyinteresting/comments/7zkm6u/billboard_removal_in_toronto_reveals_original/",
		"subreddit": "r/mildlyinteresting"
	}
}

```
