
import constants from './constants'
import element from './element'

browser.addCommand("clickWhenVisible", function (ele) {

  console.log(`attempting to click ${ele.descriptor}`)
  browser.waitForVisible(ele.selector, constants.WAIT_LONG)
  browser.click(ele.selector)

})

browser.addCommand("setValueWhenVisible", function (ele, value) {

  console.log(`attempting to set value of ${ele.descriptor}`)
  browser.waitForVisible(ele.selector, constants.WAIT_LONG)
  browser.setValue(ele.selector,value)

})
