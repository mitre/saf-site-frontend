import { test, expect } from '@playwright/test';

test('Home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/')

  
  await page.getByText('MITRE SAF©').click();
  await page.getByText('MITRE is a registered trademark of The MITRE Corporation. Material on this site may be copied and distributed with permission only.').click();
  
  // Check theme selector
  await page.locator('#theme').selectOption('Dark');
  await page.locator('#theme').selectOption('Light');
  await page.locator('#theme').selectOption('System');
  

  // Test header navigation
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Plan' }).click();
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Harden' }).click();
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Validate' }).click();
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Normalize' }).click();
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Visualize' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('link', { name: 'FAQ' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('link', { name: 'Training' }).click();
});