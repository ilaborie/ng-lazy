import { NgPlopPage } from './app.po';

describe('ng-plop App', () => {
  let page: NgPlopPage;

  beforeEach(() => {
    page = new NgPlopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
