import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL('/docs')
  await page.locator('[id="__nuxt"] div').filter({ hasText: 'On this page InSpec 101The Road to Security Automation' }).nth(3).click();
  await page.getByRole('navigation', { name: 'On this page' }).getByRole('heading', { name: 'InSpec 101' }).click();
  await page.getByRole('link', { name: 'The Road to Security Automation' }).click();
  await page.getByRole('heading', { name: 'Class Overview' }).click();
  await page.getByRole('link', { name: 'Next Starting the Journey' }).click();
  await page.getByRole('heading', { name: 'Starting the Journey' }).click();
  await page.getByText('Beginner ClassClass OverviewStarting the JourneyStudying an InSpec profile').click();
  await page.getByText('Advanced ClassClass OverviewReview the FundamentalsPractice the Fundamentals').click();
  await page.getByText('SAF ActionHow to create a SAF Action Release').click();
  await page.getByRole('heading', { name: 'Heimdall2' }).click();
  await page.getByText('Heimdall2How to create a Heimdall2 release').click();
  await page.getByRole('heading', { name: 'How to create a Heimdall2 release' }).click();
  await page.getByRole('button', { name: 'Documentation search... Ctrl K' }).click();
});