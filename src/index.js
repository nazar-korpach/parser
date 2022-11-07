const { Builder, until,  Browser, By } = require('selenium-webdriver');

( async () => {
  const url = process.argv[2];

  const webdriver = await new Builder()
  .forBrowser(Browser.CHROME)
  .build()

  await webdriver.get(url);
  await webdriver.executeScript(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    })
  });
  
  const el = await webdriver.findElement( By.id('data') );
  await webdriver.wait(until.elementTextContains(el, 'result'), 5000);

  console.log(await el.getText());

  await webdriver.quit();
  

} )()