const { Builder, By, Key, until } = require('selenium-webdriver')

const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

async function example() {
  let driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get(
      'file:///C:/Users/matou/Desktop/Digiza/calculator-jest/index.html'
    ) // např.: file:///D:/Data/ITnetwork/JS/selenium/index.html
    await driver.findElement(By.id('cislo1')).sendKeys('5', Key.RETURN)
    await driver.findElement(By.id('cislo2')).sendKeys('10', Key.RETURN)
    await driver.findElement(By.id('submit')).click()
  } finally {
    //await driver.quit()
  }
}
example()
