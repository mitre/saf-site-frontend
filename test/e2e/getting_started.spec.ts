import {test, expect} from '@playwright/test';

test('Getting Started Page', async ({page}) => {
  // Navigate to Getting Started page
  await page.goto('/');
  await page.getByRole('link', {name: 'Getting Started'}).click();
  await expect(page).toHaveURL('/getting-started');

  // Check if title is present
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Getting Started'
    })
  ).toBeVisible();

  // Check if there is body text
  await expect(
    page.getByRole('heading', {
      level: 2,
      name: 'Overview'
    })
  ).toBeVisible();
});
