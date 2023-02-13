import { test, expect } from '@playwright/test';

test('Home', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/')
  await page.getByText('WorkflowSAF SVG - blueCreated with Sketch.MITRE SAF©').click();
  await page.locator('.relative > .hidden > .relative').click();
  await page.locator('#theme').selectOption('Dark');
  await page.getByText('GitHubCopyright © 1997-2023, The MITRE Corporation. All rights reserved. MITRE i').click();
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('button', { name: 'Toolkit' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('button', { name: 'More' }).click();
});