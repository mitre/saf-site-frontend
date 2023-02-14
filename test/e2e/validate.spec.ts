import { test, expect } from '@playwright/test';

test('Validation', async ({ page }) => {
  // Navigate to validate page
  await page.goto('/');
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Validate' }).click();
  await expect(page).toHaveURL('/toolkit/validate')

  await expect(page.getByRole('heading', { level: 1, name: 'Validate' })).toBeVisible();
  // Filter table
  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('gke');

  await expect(page.getByRole('cell', { name: 'AWS CIS | v1.1.0' })).toBeHidden()

  await expect(page.getByRole('cell', { name: 'GKE CIS Benchmark | v1.1.0' })).toBeVisible()

  // Check modal
  await page.getByRole("button", {name: "view Details"}).click();
  await expect(page).toHaveURL('/toolkit/modal/gke-cis-benchmark?id=6')
  await expect(page.getByRole('heading', { level: 3, name: 'Guidance Overview' })).toBeVisible();
  await expect(page.getByText("GKE CIS Benchmark")).toBeVisible();
  await expect(page.getByText("https://github.com/GoogleCloudPlatform/inspec-gke-cis-benchmark")).toBeVisible();
  await page.goto('/toolkit/validate');

  await page.getByRole('button', { name: 'View Details , Ubuntu 16.04 STIG' }).click();  
  await expect(page).toHaveURL('/toolkit/modal/ubuntu-1604-stig?id=27')
  await expect(page.getByRole('heading', { level: 3, name: 'Guidance Overview' })).toBeVisible();
  await expect(page.getByText("Ubuntu 16.04 STIG").first()).toBeVisible();
  await expect(page.getByText("https://github.com/mitre/chef-canonical-ubuntu-16.04-lts-stig-hardening")).toBeVisible();
  await expect(page.getByText("https://github.com/mitre/canonical-ubuntu-16.04-lts-stig-baseline")).toBeVisible();
  await page.goto('/toolkit/validate');

  await page.getByRole('button', { name: 'View Details , Windows 2012 STIG' }).click();
  await expect(page).toHaveURL('/toolkit/modal/windows-2012-stig?id=37')
  await expect(page.getByRole('heading', { level: 3, name: 'Guidance Overview' })).toBeVisible();
  await expect(page.getByText("Windows Server 2012/2012 R2 Member Server")).toBeVisible();
  await expect(page.getByText("https://github.com/mitre/chef-stig-windows-2012-v2r12-memberserver-hardening")).toBeVisible();
  await expect(page.getByText("https://github.com/mitre/microsoft-windows-2012r2-memberserver-stig-baseline")).toBeVisible();
  await page.goto('/toolkit/validate');
});