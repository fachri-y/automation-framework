import { test } from '@playwright/test';

import { LoginPage }
from '../page/LoginPage';

import { MenuPage }
from '../page/MenuPage';

test(
'logout successfully',
async ({ page }) => {

  const loginPage =
    new LoginPage(page);

  const menuPage =
    new MenuPage(page);

  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await menuPage.openMenu();

  await menuPage.logout();

  await menuPage
    .verifyLogoutSuccess();
});
