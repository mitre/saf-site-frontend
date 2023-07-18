// import { test, expect } from '@playwright/test';

// test('Home', async ({ page }) => {
//   await page.goto('/');
//   await expect(page).toHaveURL('/')

//   // Check header and footer text
//   await expect(page.getByText('MITRE SAF©')).toBeVisible();
//   await expect(page.getByText('MITRE is a registered trademark of The MITRE Corporation. Material on this site may be copied and distributed with permission only.')).toBeVisible();

//   // Check theme selector
//   await page.locator('#theme').selectOption('Dark');
//   await page.locator('#theme').selectOption('Light');
//   await page.locator('#theme').selectOption('System');

//   // Test header visability
//   await page.getByRole('button', { name: 'Framework' }).click();
//   await expect(page.getByRole('link', { name: 'Plan' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Harden' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Validate' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Normalize' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Visualize' })).toBeVisible();

//   await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();

//   await page.getByRole('button', { name: 'More' }).click();
//   await expect(page.getByRole('link', { name: 'FAQ' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Training' })).toBeVisible();
// });
