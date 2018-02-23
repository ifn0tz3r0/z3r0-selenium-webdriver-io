
import constants from './constants'
import element from './element'

browser.addCommand("clickWhenVisible", function (ele) {

  browser.waitForVisible(ele.selector, constants.WAIT_LONG)
  browser.click(ele.selector)

})

browser.addCommand("setValueWhenVisible", function (ele, value) {

  browser.waitForVisible(ele.selector, constants.WAIT_LONG)
  browser.setValue(ele.selector,value)

})
