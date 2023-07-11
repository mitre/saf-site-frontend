import {test, expect} from '@playwright/test';

test('FAQ', async ({page}) => {
  // Navigate to FAQ
  await page.goto('/');
  await page.getByRole('button', {name: 'More'}).click();
  await page.getByRole('link', {name: 'FAQ'}).click();
  await expect(page).toHaveURL('/faq');

  // Faq 1
  const faq1 = await page.getByText('View More').nth(0); //.locator('div').filter({ hasText: '1. How many NIST SP 800-53 Security Controls are assessed under the MITRE SAF?' });
  await faq1.click();
  await expect(page).toHaveURL('/faq/1');
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: '1. How many NIST SP 800-53 Security Controls are assessed under the MITRE SAF?'
    })
  ).toBeVisible();
  // await expect(page.getByRole('paragraph', {name: 'Currently, about 162 NIST SP 800-53 security controls are assessed under this framework. Note that assessment coverage varies based on the component type. For more information, explore this Control Assessment Range table!' })).toBeVisible();

  // Go back to FAQ index
  await page.getByRole('button', {name: 'More'}).click();
  await page.getByRole('link', {name: 'FAQ'}).click();
  await expect(page).toHaveURL('/faq');

  // Faq 5
  const faq5 = await page.getByText('View More').nth(4); //.locator('div:nth-child(5) > .mt-4 > a')//.locator('div').filter({ hasText: '5. What happened to Heimdall_Tools and InSpec_Tools?' });
  await faq5.click();
  await expect(page).toHaveURL('/faq/5');
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: '5. What happened to Heimdall_Tools and InSpec_Tools?'
    })
  ).toBeVisible();
  // await expect(page.getByRole('paragraph', {name: 'Currently, about 162 NIST SP 800-53 security controls are assessed under this framework. Note that assessment coverage varies based on the component type. For more information, explore this Control Assessment Range table!' })).toBeVisible();
});
