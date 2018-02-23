

import element from '../../src/element'

class pageWebDriverIo {

  constructor(){

    this.title = 'WebdriverIO - WebDriver bindings for Node.js'
    this.url = 'http://webdriver.io/'

    this.elementLinkApi = new element('api link', 'body > nav > ul > li:nth-child(4) > a')
    this.elementActionsDivExpectedLen = 17;
    this.elementActionsDiv = new element('actions parent div', 'body > section > div > section.inner.api > nav > div.commands.action.active')

  }
}

export default new pageWebDriverIo()
