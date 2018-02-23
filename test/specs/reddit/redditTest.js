
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


    //  ///////////////////////////////////////////////////////////////////////////
    //  workaround for intermittent 'sign up' for reddit modal.
    let onboardModalSelector = "div[id='onboarding-splash']"

    if(browser.isExisting(onboardModalSelector) && browser.isVisible(onboardModalSelector)){

      console.log(`signup modal dectected: ${onboardModalSelector}`)
      browser.clickWhenVisible(pageReddit.elementSignUpModalSkipForNowButton)
    }
    else{
      console.log(`signup modal not dectected: ${onboardModalSelector}`)
    }
    //  ///////////////////////////////////////////////////////////////////////////

    let redditTopList = browser.elements(pageReddit.redditTopSelector)

    let len = redditTopList.value.length

    console.log(`there are a total of ${len} entries...`)

    let iCount = 0

    let jsonArr = []

    for(var i = 0; i < len; i++){

      if(iCount >= pageReddit.numRedditEntries)
      {
        break
      }

      let ele = redditTopList.value[i]

      let curEntryTitle = browser.elementIdElement(ele.ELEMENT,"a[class^='title']")

      let paragraphTagLine = browser.elementIdElement(ele.ELEMENT,"p[class^='tagline']")
      let paragraphTagLineTxt = browser.elementIdText(paragraphTagLine.value.ELEMENT).value

      if(paragraphTagLineTxt.includes('promoted by')){
        console.log('...skipping promoted entry...')
        continue
      }

      let strCurEntryTitle = ''
      let strCurEntryHref = ''
      let strCurEntryAuthor = ''
      let strCurEntrySubReddit = ''

      strCurEntryTitle = browser.elementIdText(curEntryTitle.value.ELEMENT).value
      strCurEntryHref = browser.elementIdAttribute(curEntryTitle.value.ELEMENT,'href').value

      let curEntryAuthor = browser.elementIdElement(ele.ELEMENT,"a[class^='author']")
      strCurEntryAuthor = browser.elementIdText(curEntryAuthor.value.ELEMENT).value

      let curEntrySubReddit = browser.elementIdElement(ele.ELEMENT,"a[class^='subreddit']")
      strCurEntrySubReddit = browser.elementIdText(curEntrySubReddit.value.ELEMENT).value

      iCount++

      var json = {
        'rank' : iCount,
        'title' : strCurEntryTitle,
        'author' : strCurEntryAuthor,
        'href' : strCurEntryHref,
        'subreddit' : strCurEntrySubReddit
      }

      jsonArr.push(json)
    }

    console.log(JSON.stringify(jsonArr, null, "\t"))

  })
})
