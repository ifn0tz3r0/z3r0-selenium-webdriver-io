var assert = require('assert')

import pageGoogle from '../../../src/pageobjects/pageGoogle'

describe('google test', function() {
  it('should navigate to google search page, perform verification, and submit a search', function () {

    console.log(`navigating to ${pageGoogle.url}`)
    browser.url(pageGoogle.url)
    var title = browser.getTitle()
    console.log(`verifying page title is '${pageGoogle.title}'`)
    assert.equal(title, pageGoogle.title)

    browser.waitForVisible(pageGoogle.elementSearchInput.selector, 50000)
    browser.setValue(pageGoogle.elementSearchInput.selector, pageGoogle.searchTerm)
    browser.click(pageGoogle.elementSearchSubmit.selector)
  
  });
});
