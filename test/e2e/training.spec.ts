import { test, expect } from '@playwright/test';

test('training', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('link', { name: 'Training Learn how to maximize our platform to get the most out of it.' }).click();
  await expect(page).toHaveURL('/training');
  await expect(page.getByRole('heading', { name: 'Our Training' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'SAF Training Site - GitHub' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'SAF Training Site - Netlify' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Beginner Class' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Advanced Class' })).toBeVisible();
  await expect(page.locator('[id="Embeded\\ Videos"] div').filter({ hasText: 'This course teaches the basics of writing and running InSpec test profiles. Note' }).nth(2)).toBeVisible();
  await expect(page.locator('[id="Embeded\\ Videos"] div').filter({ hasText: 'This course provides a deep dive into InSpec\'s advanced capabilities.' }).nth(2)).toBeVisible();
});