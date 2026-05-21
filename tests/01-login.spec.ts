import { test } from '@playwright/test';

import { LoginPage }
from '../page/LoginPage';

test('login success',
async ({ page }) => {

  const loginPage =
    new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await loginPage
    .verifyLoginSuccess();
});
