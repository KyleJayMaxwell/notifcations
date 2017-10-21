import { NotificationsPage } from './app.po';

describe('notifications App', () => {
  let page: NotificationsPage;

  beforeEach(() => {
    page = new NotificationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
