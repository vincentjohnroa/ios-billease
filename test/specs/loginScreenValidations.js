import {remote} from 'webdriverio';
import { expect } from 'expect-webdriverio'


async function main () {
  const desired_capabilities = {
    "platformName": "iOS",
    "deviceName": "iPhone 13",
    "platformVersion": "18.3.1",
    "automationName": "XCUITest",
    "browserName": "Chrome",
    "browserstack.debug": true,
    "browserstack.networkLogs": true
  }
  
  const driver = await remote({
      protocol: "http",
      hostname: "192.168.100.7",
      port: 4723,
      path: "/",
      capabilities: desired_capabilities
  });

    const chromeApp = await driver.$("accessibility id:Chrome");
    const chromeAddressBar = await driver.$("id:com.android.chrome:id/url_bar");
    const billeaseLink = await driver.$("-android uiautomator:new UiSelector().text(\"billease.ph\").instance(0)");
    const hamburgerMenu = await driver.$("class name:android.widget.Button");
    const loginButton = await driver.$("accessibility id:LOG IN");


    await chromeApp.click();
    await chromeAddressBar.click();
    await chromeAddressBar.addValue("billease.ph");
    await billeaseLink.click();
    await hamburgerMenu.click();
    await loginButton.click();


    await driver.deleteSession();
}

main().catch(console.log);
