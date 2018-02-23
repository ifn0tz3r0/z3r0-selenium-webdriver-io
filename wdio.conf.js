//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

//start selenium server
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar

//run all tests on chrome
./node_modules/.bin/wdio wdio.conf.js --capabilities=chrome

//run all tests chrome, firefox, and headless
./node_modules/.bin/wdio wdio.conf.js --capabilities=chrome,firefox,headless

//run individual tests
./node_modules/.bin/wdio wdio.conf.js --spec test/specs/google/googletest.js --capabilities=firefox,chrome,headless
./node_modules/.bin/wdio wdio.conf.js --spec test/specs/webdriverio/webDriverIoTest.js --capabilities=firefox,chrome,headless
./node_modules/.bin/wdio wdio.conf.js --spec test/specs/reddit/redditTest.js --capabilities=firefox,chrome,headless

*/
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

const configs = {
  chrome : {
    maxInstances: "5",
    browserName: "chrome"
  },
  firefox : {
    maxInstances: "5",
    browserName: "firefox"
  },
  headless : {
    maxInstances: "5",
    browserName: "chrome",
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
      binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
    }
  },
}

//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

function customCapabilites() {

    let caps = null
    let defConfig = configs.headless

    if (process.argv !== undefined && process.argv.length) {
      process.argv.forEach(arg => {
        if (arg.indexOf('--capabilities=') !== -1) {
          caps = arg.replace('--capabilities=', '')
        }
      })
    }

    if(caps !== null){

      let arr = [];
      var capsArr = caps.split(',')

      capsArr.forEach(cap => {
        arr.push(configs[cap])
      })

      return arr
    }
    else{
      return [defConfig]
    }

    return null
}
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.config = {

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [

    ],

    maxInstances: 1,
    capabilities: customCapabilites(),
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000000
    },

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
     before: function (capabilities, specs) {
       require('babel-register')
       require('./src/customCommands.js')
       require('./src/element.js')

       browser.windowHandleSize({width:1280,height:800})

     },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },

    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    // beforeTest: function (test) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function () {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function () {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    // afterTest: function (test) {
    // },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onComplete: function(exitCode, config, capabilities) {
    // }
}
