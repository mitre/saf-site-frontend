import { test, expect } from '@playwright/test';

test('Blog', async ({ page }) => {
  // Navigate to blog page
  await page.goto('/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL('/blog')

  await expect(page.getByRole('heading', { level: 2, name: 'Blog' })).toBeVisible();
  // Click blog post
  await page.getByText('Features Test').click();  
  await expect(page).toHaveURL('/blog/2022-10-31/features-test?id=16')
  await expect(page.getByRole('heading', { level: 1, name: 'Features Test' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Test For Features' })).toBeVisible();

  // TODO: Check image load
  // TODO: Check video load

  // Go to author page
  await page.getByRole('link', {name: 'Test Author' }).click()
  await expect(page).toHaveURL('/blog/authors?name=Test%20Author')
  await expect(page.getByRole('heading', { level: 1, name: 'Test Author' })).toBeVisible();
  // TODO: Check more elements of author page
});