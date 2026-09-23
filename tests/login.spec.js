
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('test', async ({ page }) => {
  //await page.goto('https://the-internet.herokuapp.com/login');
  
  const login = new LoginPage(page);

  await login.navigate();
  await login.login('tomsmith', 'SuperSecretPassword!');
});
