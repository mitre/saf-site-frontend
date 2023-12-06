import {test, expect} from '@playwright/test';

test('Hardening Library Page', async ({page}) => {
  // Navigate to harden page
  await page.goto('/libs/harden');
  // await page.getByRole('button', {name: 'Libraries'}).click();
  // await page.getByRole('link', {name: 'Harden'}).nth(0).click();
  // await expect(page).toHaveURL('/libs/harden');

  await expect(
    page.getByRole('heading', {level: 1, name: 'Harden'})
  ).toBeVisible();
  // Filter table
  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('aws');

  await expect(
    page.getByRole('cell', {name: 'Docker CIS Benchmark | v1.1.0'})
  ).toBeHidden();

  await expect(
    page.getByRole('cell', {name: 'AWS CIS Benchmark | v1.1.0'})
  ).toBeVisible();

  // Check guidance
  await page.getByRole('button', {name: 'view Details'}).click();
  await expect(page).toHaveURL('/libs/guidance/aws-cis-benchmark?id=83');
  await expect(
    page.getByRole('heading', {level: 1, name: 'Guidance Overview'})
  ).toBeVisible();
  await expect(page.getByText('AWS Foundations Benchmark')).toBeVisible();
  await expect(
    page.locator(
      '[href*="https://github.com/mitre/cis-aws-foundations-hardening"]'
    )
  ).toBeVisible();
  await page.goto('/libs/harden');

  await page.getByPlaceholder('Search for ...').click();
  await page.getByPlaceholder('Search for ...').fill('tom');

  await page
    .getByRole('button', {name: 'View Details , Tomcat 9 STIG'})
    .click();
  await expect(page).toHaveURL('/libs/guidance/tomcat-9-stig?id=77');
  await expect(
    page.getByRole('heading', {level: 1, name: 'Guidance Overview'})
  ).toBeVisible();
  await expect(page.getByText('Tomcat 9 STIG')).toBeVisible();
  await expect(
    page.locator('[href*="https://github.com/ansible-lockdown/TOMCAT-9-STIG"]')
  ).toBeVisible();
  await page.goto('/libs/harden');

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
    page.getByText('Windows Server 2012/2012 R2 Member Server')
  ).toBeVisible();
  await expect(
    page.locator(
      '[href*="https://github.com/mitre/chef-stig-windows-2012-v2r12-memberserver-hardening"]'
    )
  ).toBeVisible();
});
