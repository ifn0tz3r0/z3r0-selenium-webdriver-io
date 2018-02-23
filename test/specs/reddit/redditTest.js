
var assert = require('chai').assert
var expect = require('chai').expect

import constants from '../../../src/constants'
import pageReddit from '../../../src/pageobjects/pageReddit'

describe('reddit test', function() {
  it('should navigate to reddit home page and retrieve top 10 articles', function () {

    console.log(`navigating to ${pageReddit.url}`)
    browser.url(pageReddit.url)
    var title = browser.getTitle()
    console.log(`verifying page title is '${pageReddit.title}'`)
    assert.equal(title, pageReddit.title)

    browser.pause(constants.WAIT_SHORT)

    let onboardModalSelector = "div[id='onboarding-splash']"

    if(browser.isExisting(onboardModalSelector) && browser.isVisible(onboardModalSelector)){

      console.log(`signup modal dectected: ${onboardModalSelector}`)
      browser.clickWhenVisible(pageReddit.elementSignUpModalSkipForNowButton)
    }
    else{
      console.log(`signup modal not dectected: ${onboardModalSelector}`)
    }

    let redditTopList = browser.elements(pageReddit.redditTopSelector)

    let len = redditTopList.value.length

    console.log(len)

    redditTopList.value.forEach(ele => {

      console.log('................................')
      let curEntryTitle = browser.elementIdElement(ele.ELEMENT,"a[class^='title']")

      let paragraphTagLine = browser.elementIdElement(ele.ELEMENT,"p[class^='tagline']")
      let paragraphTagLineTxt = browser.elementIdText(paragraphTagLine.value.ELEMENT).value;

      if(paragraphTagLineTxt.includes('promoted by')){
        console.log('...skipping promoted entry...')
        console.log('................................')
        return;
      }
      console.log('................................')

      console.log(browser.elementIdText(curEntryTitle.value.ELEMENT).value)
      console.log('\t' + browser.elementIdAttribute(curEntryTitle.value.ELEMENT,'href').value)

      let curEntryAuthor = browser.elementIdElement(ele.ELEMENT,"a[class^='author']")
      console.log('\t\t' + browser.elementIdText(curEntryAuthor.value.ELEMENT).value)

      let curEntrySubReddit = browser.elementIdElement(ele.ELEMENT,"a[class^='subreddit']")

      if(curEntrySubReddit !== null){

        if(curEntrySubReddit.value !== null){

          if(curEntrySubReddit.value.ELEMENT !== null){
            console.log('\t\t\t' + browser.elementIdText(curEntrySubReddit.value.ELEMENT).value)
          }
        }
      }

      console.log('................................')
    })
  })
})
