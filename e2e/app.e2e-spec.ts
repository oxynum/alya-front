import { AlyaV1Page } from './app.po';

describe('alya-v1 App', () => {
  let page: AlyaV1Page;

  beforeEach(() => {
    page = new AlyaV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
