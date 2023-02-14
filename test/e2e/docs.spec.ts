import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  // Navigate to docs page
  await page.goto('/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL('/docs')

  // Check documentation element
  await page.getByRole('heading', { level: 1, name: 'Class Overview' })
  await page.getByRole('link', { name: 'The Road to Security Automation' }).click();
  await expect(page).toHaveURL('/docs#the-road-to-security-automation')

  // Use next button
  await page.getByRole('link', { name: 'Next Starting the Journey' }).click();
  await expect(page).toHaveURL('/docs/starting-the-journey')
  await page.getByRole('heading', { level: 1, name: 'Starting the Journey' })

  // Click a link from documentation nav
  await page.getByRole('link', { name: 'How to create a SAF Action Release' }).click();
  await expect(page).toHaveURL('/docs/how-to-create-a-saf-action-release')
  await page.getByRole('heading', { level: 1, name: 'How to create a SAF Action Release' })
});