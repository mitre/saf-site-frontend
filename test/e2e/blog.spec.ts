import { test, expect } from '@playwright/test';

test('Blog', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL('/blog')
  await page.getByRole('heading', { name: 'Blog' }).click();
  await page.getByText('News').click();
  await page.getByText('2022-10-31').click();
  await page.getByText('3 min read').click();
  await page.getByRole('link', { name: 'Features Test This post tests alot of the rich content features.' }).click();
  await page.getByText('Features Test').click();
  await page.locator('[id="__nuxt"] div').filter({ hasText: 'Features Test 2022-10-31 | Test AuthorTest For FeaturesLorem ipsum dolor sit ame' }).nth(3).click();
  await page.getByRole('link', { name: 'Test Author' }).click();
  await page.getByRole('heading', { name: 'Test Author' }).click();
  await page.getByText('Test AuthorTest Author Title Tester Company MITRE SAFAboutLorem ipsum dolor sit ').click();
  await page.getByText('Recent Articles').click();
  await page.getByText('NewsFeatures Test This post tests alot of the rich content features.Test Author2').click();
  await page.getByRole('link', { name: 'Test Author' }).click();
  await page.locator('[id="Social\\ Medias"]').click();
});