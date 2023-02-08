import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('link', { name: 'Training Learn how to maximize our platform to get the most out of it.' }).click();
  await expect (page).toHaveURL('/training')
  await page.getByRole('heading', { name: 'Our Training' }).click();
  await page.getByText('Our Training The MITRE SAF team offers training classes. Dates and sign-up links').click();
  await page.getByRole('heading', { name: 'Courses' }).click();
  await page.getByText('Beginner Security Automation Developer Class').click();
  page.waitForTimeout(10000)
  await page.frameLocator('internal:attr=[title="YouTube video player"i] >> nth=0').getByRole('button', { name: 'Play' }).click();
  await page.frameLocator('internal:attr=[title="YouTube video player"i] >> nth=1').getByRole('button', { name: 'Play' }).click();
  await page.getByText('SAF User Class (NEW!)').click();
  await page.getByRole('heading', { name: 'Upcoming Classes' }).click();
  await page.locator('[id="Schedule\\ for\\ schedules"]').getByText('Advanced ClassDate11/26/2022 at 11:00 PM EST').click();
  await page.locator('[id="Schedule\\ for\\ schedules"]').getByText('Beginner ClassDate11/25/2022 at 08:45 PM EST').click();
  await page.getByRole('link', { name: 'SAF Training Site - GitHub' }).click();
});