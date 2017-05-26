import { TypescriptAngular4Page } from './app.po';

describe('typescript-angular4 App', () => {
  let page: TypescriptAngular4Page;

  beforeEach(() => {
    page = new TypescriptAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
