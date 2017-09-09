import { AppPage } from './app.po';

describe('simpleform-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display toolbar properly', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Simple Form Submission');
  });
});
