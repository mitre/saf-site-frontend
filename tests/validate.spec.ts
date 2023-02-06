import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Validate Generate detailed security testing results through automated tests and manual attestation.' }).click();
  await expect(page).toHaveURL('/toolkit/validate');
  page.waitForTimeout(5000)
  await page.getByRole('heading', { name: 'Validate' }).click();
  await page.locator('.inline-block > div').first().click();
  await page.getByPlaceholder('Search for ...').fill('aws');
  await page.getByRole('cell', { name: 'AWS CIS | v1.1.0' }).click();
  await page.getByRole('button', { name: 'View Details , AWS CIS' }).click();
  await expect(page).toHaveURL('/toolkit/modal/aws-cis?id=83');
  await page.locator('div:nth-child(2) > dl > div > div').first().click();
  await page.goto('/toolkit/validate');
  await page.getByRole('cell', { name: 'Red Hat 8 STIG | v1r8' }).click();
  await page.getByRole('button', { name: 'View Details , Red Hat 8 STIG' }).click();
  await expect(page).toHaveURL('/toolkit/modal/red-hat-8-stig?id=24');
  await page.locator('div:nth-child(2) > dl > div > div').first().click();
  await page.goto('/toolkit/validate');
  await page.getByRole('cell', { name: 'Windows 10 STIG | v1r19' }).click();
  await page.getByRole('button', { name: 'View Details , Windows 10 STIG' }).click();
  await expect(page).toHaveURL('/toolkit/modal/windows-10-stig?id=34');
  await page.locator('div:nth-child(2) > dl > div > div').first().click();
});