import { Page, expect } from '@playwright/test';

export class MenuPage {

  constructor(private page: Page) {}

  async openMenu() {

    await this.page.click(
      '#react-burger-menu-btn'
    );
  }

  async logout() {

    await this.page.click(
      '#logout_sidebar_link'
    );
  }

  async verifyLogoutSuccess() {

    await expect(this.page)
      .toHaveURL(
        'https://www.saucedemo.com/'
      );
  }
}