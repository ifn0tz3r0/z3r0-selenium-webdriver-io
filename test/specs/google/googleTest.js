
var assert = require('chai').assert
var expect = require('chai').expect

import constants from '../../../src/constants'
import pageGoogle from '../../../src/pageobjects/pageGoogle'

describe('google test', function() {
  it('should navigate to google search page, perform verification, and submit a search', function () {

    console.log(`navigating to ${pageGoogle.url}`)
    browser.url(pageGoogle.url)
    var title = browser.getTitle()
    console.log(`verifying page title is '${pageGoogle.title}'`)
    assert.equal(title, pageGoogle.title)

    console.log(`entering search term '${pageGoogle.searchTerm}'`)

    browser.setValueWhenVisible(pageGoogle.elementSearchInput, pageGoogle.searchTerm)

    //  ///////////////////////////////////////////////////////////////////////////
    //  workaround to remove auto suggestions, which intermittently interrupts
    //  click on search submit. browser.keys('Escape') works in chrome but not
    //  currently in firefox.
    let autoSuggestClassName = 'gstl_0 sbdd_a'

    browser.execute(function(className) {
      (document.getElementsByClassName(className)[0]).style.visibility = "hidden"
    },autoSuggestClassName)
    //  ///////////////////////////////////////////////////////////////////////////

    console.log('submitting search')
    browser.clickWhenVisible(pageGoogle.elementSearchSubmit)

    let expectedUrl = 'https://www.google.com/search?';
    console.log(`verifying url contains/starts with '${expectedUrl}'`)
    let urlTxt = browser.getUrl()
    expect(urlTxt.startsWith(expectedUrl)).to.equal(true)

  })
})
