import { test } from '@playwright/test';

import { LoginPage }
from '../page/LoginPage';

import { ProductPage }
from '../page/ProductPage';

import { CartPage }
from '../page/CartPage';

import { CheckoutPage }
from '../page/CheckoutPage';

test(
'checkout successfully',
async ({ page }) => {

  const loginPage =
    new LoginPage(page);

  const productPage =
    new ProductPage(page);

  const cartPage =
    new CartPage(page);

  const checkoutPage =
    new CheckoutPage(page);

  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await productPage
    .addProductToCart();

  await productPage.openCart();

  await cartPage
    .verifyItemInCart();

  await cartPage
    .clickCheckout();

  await checkoutPage
    .fillCheckoutInformation();

  await checkoutPage
    .continueCheckout();

  await checkoutPage
    .finishCheckout();

  await checkoutPage
    .verifyCheckoutSuccess();
});
