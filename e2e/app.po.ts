export class Angular2TestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-test-app h1')).getText();
  }
}
