import {test, expect} from '@playwright/test';

test('App Pages', async ({page}) => {
  // Check Heimdall page
  await page.goto('/');
  await page.getByRole('button', {name: 'Apps'}).click();
  await page
    .getByRole('link', {
      name: 'Heimdall©'
    })
    .click();
  await expect(page).toHaveURL('/apps/heimdall');
  await expect(
    page.getByRole('heading', {name: 'Heimdall©', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Security Data Visualization App'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Visualize Your Security Posture'})
  ).toBeVisible();

  // Check Harden page
  await page.goto('/');
  await page.getByRole('button', {name: 'Apps'}).click();
  await page
    .getByRole('link', {
      name: 'Vulcan©'
    })
    .click();
  await expect(page).toHaveURL('/apps/vulcan');
  await expect(
    page.getByRole('heading', {name: 'Vulcan©', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Security Guidance Authorship App'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Develop Baselines in a User-Friendly Editing Window'
    })
  ).toBeVisible();

  // Check SAF CLI page
  await page.goto('/');
  await page.getByRole('button', {name: 'Apps'}).click();
  await page
    .getByRole('link', {
      name: 'SAF CLI'
    })
    .click();
  await expect(page).toHaveURL('/apps/saf-cli');
  await expect(
    page.getByRole('heading', {name: 'SAF CLI', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Support utility for security automation'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Convert between security data formats'})
  ).toBeVisible();

  // Check eMASSer page
  await page.goto('/');
  await page.getByRole('button', {name: 'Apps'}).click();
  await page
    .getByRole('link', {
      name: 'eMASSer'
    })
    .click();
  await expect(page).toHaveURL('/apps/emasser');
  await expect(
    page.getByRole('heading', {level: 2, name: 'eMASSer', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Automate interactions with eMASS'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Associated Content'})
  ).toBeVisible();
});
