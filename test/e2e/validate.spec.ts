import {test, expect} from '@playwright/test';

test('Validation Library Page', async ({page}) => {
  // Navigate to validate page
  await page.goto('/');
  await page.getByRole('button', {name: 'Libraries'}).click();
  await page.getByRole('link', {name: 'Validate'}).nth(0).click();
  await expect(page).toHaveURL('/libs/validate');

  await expect(
    page.getByRole('heading', {level: 1, name: 'Validate'})
  ).toBeVisible();
  // Filter table
  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('gke');

  await expect(page.getByRole('cell', {name: 'AWS CIS | v1.1.0'})).toBeHidden();

  await expect(
    page.getByRole('cell', {name: 'GKE CIS Benchmark | v1.1.0'})
  ).toBeVisible();

  // Check guidance
  await page.getByRole('button', {name: 'view Details'}).click();
  await expect(page).toHaveURL('/libs/guidance/gke-cis-benchmark?id=6');
  await expect(
    page.getByRole('heading', {level: 1, name: 'Guidance Overview'})
  ).toBeVisible();
  await expect(
    page.getByText('Google Kubernetes Engine CIS Benchmark')
  ).toBeVisible();
  await expect(
    page.locator(
      '[href*="https://github.com/GoogleCloudPlatform/inspec-gke-cis-benchmark"]'
    )
  ).toBeVisible();

  await page.goto('/libs/validate');

  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('ubuntu');

  await page
    .getByRole('button', {name: 'View Details , Ubuntu 16.04 STIG'})
    .click();
  await expect(page).toHaveURL('/libs/guidance/ubuntu-1604-stig?id=27');
  await expect(
    page.getByRole('heading', {level: 1, name: 'Guidance Overview'})
  ).toBeVisible();
  await expect(page.getByText('Ubuntu 16.04 Linux STIG').first()).toBeVisible();
  await expect(
    page.locator(
      '[href*="https://github.com/mitre/chef-canonical-ubuntu-16.04-lts-stig-hardening"]'
    )
  ).toBeVisible();
  await expect(
    page.locator(
      '[href*="https://github.com/mitre/canonical-ubuntu-16.04-lts-stig-baseline"]'
    )
  ).toBeVisible();
  await page.goto('/libs/validate');

  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('windows');

  await page
    .getByRole('button', {name: 'View Details , Windows 2012 STIG'})
    .click();
  await expect(page).toHaveURL('/libs/guidance/windows-2012-stig?id=37');
  await expect(
    page.getByRole('heading', {level: 1, name: 'Guidance Overview'})
  ).toBeVisible();
  await expect(
    page.getByText('Microsoft Windows 2012r2 Member Server STIG')
  ).toBeVisible();
  await expect(
    page.locator(
      '[href*="https://github.com/mitre/microsoft-windows-2012r2-memberserver-stig-baseline"]'
    )
  ).toBeVisible();
});
