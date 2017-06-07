import { NgPlop2Page } from './app.po';

describe('ng-plop2 App', () => {
  let page: NgPlop2Page;

  beforeEach(() => {
    page = new NgPlop2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
