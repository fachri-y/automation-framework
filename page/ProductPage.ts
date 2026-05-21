import { Page, expect } from '@playwright/test';

export class ProductPage {

  constructor(private page: Page) {}

  async openProductDetail() {

    await this.page.click(
      '#item_4_title_link'
    );
  }

  async verifyProductName() {

    await expect(
      this.page.locator(
        '.inventory_details_name'
      )
    ).toContainText(
      'Sauce Labs Backpack'
    );
  }

  async verifyProductDescription() {

    await expect(
      this.page.locator(
        '.inventory_details_desc'
      )
    ).toBeVisible();
  }

  async verifyProductPrice() {

    await expect(
      this.page.locator(
        '.inventory_details_price'
      )
    ).toContainText('$');
  }

  async addProductToCart() {

    await this.page.click(
      '#add-to-cart-sauce-labs-backpack'
    );
  }

  async verifyCartBadge(
    total: string
  ) {

    await expect(
      this.page.locator(
        '.shopping_cart_badge'
      )
    ).toHaveText(total);
  }

  async openCart() {

    await this.page.click(
      '.shopping_cart_link'
    );
  }
}