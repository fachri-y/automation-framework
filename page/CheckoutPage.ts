import { Page, expect } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async fillCheckoutInformation() {

    await this.page.fill(
      '#first-name',
      'Muhammad'
    );

    await this.page.fill(
      '#last-name',
      'QA'
    );

    await this.page.fill(
      '#postal-code',
      '12345'
    );
  }

  async continueCheckout() {

    await this.page.click(
      '#continue'
    );
  }

  async finishCheckout() {

    await this.page.click(
      '#finish'
    );
  }

  async verifyCheckoutSuccess() {

    await expect(
      this.page.locator(
        '.complete-header'
      )
    ).toContainText(
      'Thank you for your order!'
    );
  }
}