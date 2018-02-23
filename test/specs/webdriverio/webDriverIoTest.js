
var assert = require('chai').assert
var expect = require('chai').expect

import constants from '../../../src/constants'
import pageWebDriverIo from '../../../src/pageobjects/pageWebDriverIo'

describe('webdriver.io test', function() {
  it('should navigate to webdriver.io page, verify number of actions, and print their values', function () {

    console.log(`navigating to ${pageWebDriverIo.url}`)
    browser.url(pageWebDriverIo.url)
    var title = browser.getTitle()
    console.log(`verifying page title is '${pageWebDriverIo.title}'`)
    assert.equal(title, pageWebDriverIo.title)

    browser.clickWhenVisible(pageWebDriverIo.elementLinkApi)

    let eleActionsDiv = browser.element(pageWebDriverIo.elementActionsDiv.selector)
    let eleActionsDivId = eleActionsDiv.value.ELEMENT

    let actionsChildren = browser.elementIdElements(eleActionsDivId,'a')

    console.log(`verifying number of actions is ${pageWebDriverIo.elementActionsDivExpectedLen}`)
    let len = actionsChildren.value.length
    assert.equal(pageWebDriverIo.elementActionsDivExpectedLen, len)

    console.log(`printing children values of ${pageWebDriverIo.elementActionsDiv.descriptor}`)
    console.log('................................')

    actionsChildren.value.forEach(ele => {
      console.log(browser.elementIdText(ele.ELEMENT).value + ' :: ' + browser.elementIdAttribute(ele.ELEMENT,'href').value)
    })
    console.log('................................')

  })
})
