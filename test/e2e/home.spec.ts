// import {test, expect} from '@playwright/test';

// test('Home Page', async ({page}) => {
//   await page.goto('/');
//   await expect(page).toHaveURL('/');

//   // Check header and footer text
//   await expect(page.getByRole('link', {name: 'MITRE SAF ©'})).toBeVisible();
//   await expect(
//     page.getByText(
//       'MITRE is a registered trademark of The MITRE Corporation. Material on this site may be copied and distributed with permission only. '
//     )
//   ).toBeVisible();

//   // Check theme selector
//   await page.locator('#theme-selector').selectOption('Dark');
//   await page.locator('#theme-selector').selectOption('Light');
//   await page.locator('#theme-selector').selectOption('System');

//   /* Test header visability */
//   // Getting Started
//   await expect(page.getByRole('link', {name: 'Getting Started'})).toBeVisible();

//   // Framework
//   await page.getByRole('button', {name: 'Framework'}).click();
//   await expect(
//     page.getByRole('link', {name: 'Plan', exact: true})
//   ).toBeVisible();
//   await expect(page.getByRole('link', {name: 'Harden'})).toBeVisible();
//   await expect(
//     page.locator('[href*="/framework/validate"]', {hasText: 'Validate'})
//   ).toBeVisible();
//   await expect(page.getByRole('link', {name: 'Normalize'})).toBeVisible();
//   await expect(page.getByRole('link', {name: 'Visualize'})).toBeVisible();

//   // Apps
//   await page.getByRole('button', {name: 'Apps'}).click();
//   await expect(
//     page.getByRole('link', {
//       name: 'Heimdall© Security Data Visualization App',
//       exact: true
//     })
//   ).toBeVisible();
//   await expect(
//     page.getByRole('link', {
//       name: 'Vulcan© Security Guidance Authorship App',
//       exact: true
//     })
//   ).toBeVisible();
//   await expect(
//     page.getByRole('link', {
//       name: 'SAF CLI Support utility for security automation',
//       exact: true
//     })
//   ).toBeVisible();
//   await expect(
//     page.getByRole('link', {
//       name: 'eMASSer Automate interactions with eMASS',
//       exact: true
//     })
//   ).toBeVisible();

//   // Libraries
//   await page.getByRole('button', {name: 'Libraries'}).click();
//   await expect(
//     page.getByRole('link', {
//       name: 'Harden Implement security baselines using our Ansible, Chef, and Terraform content.'
//     })
//   ).toBeVisible();
//   // Since there are two "Validate" links, the below tests differently
//   await expect(
//     page.locator('[href*="/libs/validate"]', {hasText: 'Validate'})
//   ).toBeVisible();
//   await expect(page.getByRole('link', {name: 'OHDF Converters'})).toBeVisible();
//   await expect(
//     page.getByRole('link', {name: 'TS InSpec Objects'})
//   ).toBeVisible();
//   await expect(page.getByRole('link', {name: 'eMASS Client'})).toBeVisible();

//   // Docs
//   await expect(page.getByRole('link', {name: 'Docs'})).toBeVisible();

//   // Blog
//   await expect(page.getByRole('link', {name: 'Blog'})).toBeVisible();

//   // More
//   await page.getByRole('button', {name: 'More'}).click();
//   await expect(page.getByRole('link', {name: 'FAQ'})).toBeVisible();
//   await expect(page.getByRole('link', {name: 'Training'})).toBeVisible();
//   await expect(page.getByRole('link', {name: 'Admin Login'})).toBeVisible();
// });
