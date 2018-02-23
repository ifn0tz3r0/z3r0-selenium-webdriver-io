

import element from '../../src/element'

class pageGoogle {

  constructor(){

    this.title = 'Google'
    this.url = 'http://www.google.com'
    this.searchTerm = 'automation'
    this.elementAutoSuggestListDiv = new element ('autosuggest div', '#sbtc > div.gstl_0.sbdd_a')
    this.elementSearchInput = new element('search input', '#lst-ib')
    this.elementSearchSubmit = new element('search submit', '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
    
  }
}

export default new pageGoogle()
