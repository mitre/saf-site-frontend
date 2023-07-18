import {test, expect} from '@playwright/test';

test('Docs', async ({page}) => {
  // Navigate to docs page
  await page.goto('/');
  await page.getByRole('link', {name: 'Docs'}).click();
  await expect(page).toHaveURL('/docs');

  // Check documentation element
  await expect(
    page.getByRole('heading', {level: 1, name: 'Introduction'})
  ).toBeVisible();

  // Use next button
  await page.getByRole('link', {name: 'Next Background & Overview'}).click();
  await expect(page).toHaveURL('/docs/mapper-background');
  await expect(
    page.getByRole('heading', {level: 1, name: 'Background & Overview'})
  ).toBeVisible();
  await page
    .getByRole('link', {name: 'HDF Schema Mapping Example Walkthrough'})
    .click();
  await expect(page).toHaveURL(
    '/docs/mapper-background#hdf-schema-mapping-example-walkthrough'
  );

  // Click a link from documentation nav
  await page.getByRole('link', {name: 'Mapper Creation', exact: true}).click();
  await expect(page).toHaveURL('/docs/mapper-creation');
  await page.getByRole('heading', {level: 1, name: 'Mapper Creation'});
});
