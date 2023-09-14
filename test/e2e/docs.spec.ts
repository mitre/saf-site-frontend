// import {test, expect} from '@playwright/test';

// test('Docs Page', async ({page}) => {
//   // Navigate to docs page
//   await page.goto('/');
//   await page.getByRole('link', {name: 'Docs'}).click();
//   await expect(page).toHaveURL('/docs');

//   // Check documentation element
//   await expect(
//     page.getByRole('heading', {level: 1, name: 'Installation'})
//   ).toBeVisible();

//   // Use next button
//   await page
//     .getByRole('link', {name: 'Next Environment Variables Configuration'})
//     .click();
//   await expect(page).toHaveURL('/docs/envar-config');
//   await expect(
//     page.getByRole('heading', {
//       level: 1,
//       name: 'Environment Variables Configuration'
//     })
//   ).toBeVisible();
//   await page.getByRole('link', {name: 'Configuration', exact: true}).click();
//   await expect(page).toHaveURL('/docs/envar-config#configuration');

//   // Click a link from documentation nav
//   await page
//     .getByRole('link', {
//       name: 'Configuring Heimdall for External Authentication Only',
//       exact: true
//     })
//     .click();
//   await expect(page).toHaveURL('/docs/disable-local-auth');
//   await page.getByRole('heading', {
//     level: 1,
//     name: 'Configuring Heimdall for External Authentication Only'
//   });
// });
