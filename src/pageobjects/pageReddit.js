

import element from '../../src/element'

class pageReddit {

  constructor(){

    this.title = 'reddit: the front page of the internet'
    this.url = 'http://reddit.com/'

    //  ///////////////////////////////////////////////////////////////////////////
    //  grab all divs that start with 'entry'. we need to filter out promotional
    //  items.
    this.numRedditEntries = 10;
    this.redditTopSelector = 'div[class^="entry"]'
    this.elementSignUpModalSkipForNowButton = new element('signup - skip for now', "a[class='skip-for-now']")


  }
}

export default new pageReddit()
