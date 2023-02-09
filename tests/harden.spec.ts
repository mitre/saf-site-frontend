import { test, expect } from '@playwright/test';

test('Hardening', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Harden Implement security baselines using our Ansible, Chef, and Terraform content.' }).click();
    await expect(page).toHaveURL('/toolkit/harden')
  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('aws');
  await page.getByRole('cell', { name: 'AWS CIS Benchmark | v1.1.0' }).click();
  await page.getByRole('button', { name: 'View Details , AWS CIS Benchmark' }).click();
  await expect(page).toHaveURL('/toolkit/modal/aws-cis-benchmark?id=83')
  await page.locator('dl > div > div').first().click();
  await page.goto('/toolkit/harden');
  await page.getByRole('cell', { name: 'Apache CIS Benchmark | v2.0.0' }).click();
  await page.getByRole('button', { name: 'View Details , Apache CIS Benchmark' }).click();
  await expect(page).toHaveURL('/toolkit/modal/apache-cis-benchmark?id=72')
  await page.locator('dl > div > div').first().click();
  await page.goto('/toolkit/harden');
  await page.getByRole('cell', { name: 'Cisco IOS XE NDM/RTR STIG | v2r3' }).click();
  await page.getByRole('button', { name: 'View Details , Cisco IOS XE NDM/RTR STIG' }).click();
  await expect(page).toHaveURL('/toolkit/modal/cisco-ios-xe-ndmrtr-stig?id=58')
  await page.locator('dl > div > div').first().click();
});