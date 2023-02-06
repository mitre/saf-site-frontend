import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('link', { name: 'Help Center Get all of your questions answered in our forums or contact support.' }).click();
  await expect(page).toHaveURL('/faq')
  await page.getByText('1. How many NIST SP 800-53 Security Controls are assessed under the MITRE SAF?').click();
  await page.locator('dl div').filter({ hasText: '1. How many NIST SP 800-53 Security Controls are assessed under the MITRE SAF?Cu' }).getByRole('definition').nth(1).click();
  await page.locator('dl div').filter({ hasText: '1. How many NIST SP 800-53 Security Controls are assessed under the MITRE SAF?Cu' }).getByRole('link', { name: 'View More' }).click();
  await page.getByText('1. How many NIST SP 800-53 Security Controls are assessed under the MITRE SAF?').click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('link', { name: 'Help Center Get all of your questions answered in our forums or contact support.' }).click();
  await page.getByText('6. How can I use InSpec test in my CI/CD pipeline?').click();
  await page.locator('dl div').filter({ hasText: '6. How can I use InSpec test in my CI/CD pipeline?InSpec tests can be integrated' }).getByRole('link', { name: 'View More' }).click();
  await page.getByText('6. How can I use InSpec test in my CI/CD pipeline?').click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('link', { name: 'Help Center Get all of your questions answered in our forums or contact support.' }).click();
  await page.getByText('8. What is the difference between Chef InSpec and CINC Auditor?').click();
  await page.locator('dl div').filter({ hasText: '8. What is the difference between Chef InSpec and CINC Auditor?All Chef software' }).getByRole('link', { name: 'View More' }).click();
  await page.getByText('8. What is the difference between Chef InSpec and CINC Auditor?').click();
});