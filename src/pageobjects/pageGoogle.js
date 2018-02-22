

import element from '../../src/element'

class pageGoogle {

  constructor(){
    this.title = 'Google'
    this.url = 'http://www.google.com'
    this.searchTerm = 'automation'
    this.elementAppDock = new element ('app dock', '#gbwa > div.gb_Nc > a')
    this.elementSearchInput = new element('search input', '#lst-ib')
    this.elementSearchSubmit = new element('search submit', '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
  }
}

export default new pageGoogle()
