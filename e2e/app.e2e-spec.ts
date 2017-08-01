import { AdqwestAppPage } from './app.po';

describe('adqwest-app App', () => {
  let page: AdqwestAppPage;

  beforeEach(() => {
    page = new AdqwestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
