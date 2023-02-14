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

  await page.getByRole("button", {name: "view Details"}).click();

  await expect(page).toHaveURL('/toolkit/modal/gke-cis-benchmark?id=6')
  await expect(page.getByRole('heading', { level: 3, name: 'Guidance Overview' })).toBeVisible();
  await expect(page.getByText("GKE CIS Benchmark")).toBeVisible();
  await expect(page.getByText("https://github.com/GoogleCloudPlatform/inspec-gke-cis-benchmark")).toBeVisible();
  // TODO: Check more elements
});