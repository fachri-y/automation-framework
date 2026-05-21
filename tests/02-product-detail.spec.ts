import { test } from '@playwright/test';

import { LoginPage }
from '../page/LoginPage';

import { ProductPage }
from '../page/ProductPage';

test(
'check product description',
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
    .openProductDetail();

  await productPage
    .verifyProductName();

  await productPage
    .verifyProductDescription();

  await productPage
    .verifyProductPrice();
});
