import { test, expect } from '@playwright/test';

test('Hardening', async ({ page }) => {
  // Navigate to harden page
  await page.goto('/');
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('link', { name: 'Harden' }).click();
  await expect(page).toHaveURL('/toolkit/harden')

  await expect(page.getByRole('heading', { level: 1, name: 'Harden' })).toBeVisible();
  // Filter table
  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('aws');

  await expect(page.getByRole('cell', { name: 'Docker CIS Benchmark | v1.1.0' })).toBeHidden()

  await expect(page.getByRole('cell', { name: 'AWS CIS Benchmark | v1.1.0' })).toBeVisible()

  await page.getByText('AWS CIS Benchmark | v1.1.0' );
  await page.getByRole("button", {name: "view Details"}).click();

  await expect(page).toHaveURL('/toolkit/modal/aws-cis-benchmark?id=83')
  await expect(page.getByRole('heading', { level: 3, name: 'Guidance Overview' })).toBeVisible();
  await expect(page.getByText("AWS Foundations Benchmark")).toBeVisible();
  await expect(page.getByText("https://github.com/mitre/cis-aws-foundations-hardening")).toBeVisible();
  await expect(page.getByText("https://github.com/mitre/aws-foundations-cis-baseline")).toBeVisible();
  // TODO: Check more elements
});