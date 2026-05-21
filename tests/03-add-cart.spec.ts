import { test } from '@playwright/test';

import { LoginPage }
from '../page/LoginPage';

import { ProductPage }
from '../page/ProductPage';

test(
'add product to cart',
async ({ page }) => {

  const loginPage =
    new LoginPage(page);

  const productPage =
    new ProductPage(page);

  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await productPage
    .addProductToCart();

  await productPage
    .verifyCartBadge('1');
});
