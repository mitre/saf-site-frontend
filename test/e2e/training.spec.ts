import {test, expect} from '@playwright/test';

test('Training Page', async ({page}) => {
  await page.goto('/');
  await page.getByRole('button', {name: 'More'}).click();
  await page
    .getByRole('link', {
      name: 'Training'
    })
    .click();
  await expect(page).toHaveURL('/training');
  await expect(page.getByRole('heading', {name: 'Our Training'})).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'MITRE SAF © Training Site - GitHub'})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'MITRE SAF © Training Site - Netlify'})
  ).toBeVisible();

  // Check to see if classes populated
  await expect(
    page.getByRole('heading', {level: 1, name: 'SAF User Class'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'InSpec Developer Class',
      exact: true
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Advanced InSpec Developer Class'
    })
  ).toBeVisible();

  // Check if videos loaded
  await expect(
    page
      .locator('[id="Embeded\\ Videos"] div')
      .filter({
        hasText:
          'This course teaches the basics of writing and running InSpec test profiles. Note'
      })
      .nth(2)
  ).toBeVisible();
  await expect(
    page
      .locator('[id="Embeded\\ Videos"] div')
      .filter({
        hasText:
          "This course provides a deep dive into InSpec's advanced capabilities."
      })
      .nth(2)
  ).toBeVisible();
});
