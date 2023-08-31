import {test, expect} from '@playwright/test';

test('Framework Pages', async ({page}) => {
  // Check Plan page
  await page.goto('/');
  await page.getByRole('button', {name: 'Framework'}).click();
  await page
    .getByRole('link', {
      name: 'Plan Choose, tailor, and create security configuration guidance appropriate for your mission.'
    })
    .click();
  await expect(page).toHaveURL('/framework/plan');
  await expect(
    page.getByRole('heading', {name: 'Plan', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Choose, tailor, and create security configuration guidance appropriate for your mission'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'The Planning Capability'})
  ).toBeVisible();

  // Check Harden page
  await page.goto('/');
  await page.getByRole('button', {name: 'Framework'}).click();
  await page
    .getByRole('link', {
      name: 'Harden'
    })
    .click();
  await expect(page).toHaveURL('/framework/harden');
  await expect(
    page.getByRole('heading', {name: 'Harden', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Take action to configure software for security'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'The Hardening Capability'})
  ).toBeVisible();

  // Check Validate page
  await page.goto('/');
  await page.getByRole('button', {name: 'Framework'}).click();
  await page
    .getByRole('link', {
      name: 'Validate'
    })
    .click();
  await expect(page).toHaveURL('/framework/validate');
  await expect(
    page.getByRole('heading', {name: 'Validate', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Generate detailed security test results through automation and attestation'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'The Validation Capability'})
  ).toBeVisible();

  // Check Normalize page
  await page.goto('/');
  await page.getByRole('button', {name: 'Framework'}).click();
  await page
    .getByRole('link', {
      name: 'Normalize'
    })
    .click();
  await expect(page).toHaveURL('/framework/normalize');
  await expect(
    page.getByRole('heading', {name: 'Normalize', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Covert security results from all your security tools into a common data format'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'The Normalization Capability'})
  ).toBeVisible();

  // Check Visualize page
  await page.goto('/');
  await page.getByRole('button', {name: 'Framework'}).click();
  await page
    .getByRole('link', {
      name: 'Visualize'
    })
    .click();
  await expect(page).toHaveURL('/framework/visualize');
  await expect(
    page.getByRole('heading', {name: 'Visualize', exact: true})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'View comprehensive security status, identify security defects, and manage remediation​'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'The Visualization Capability'})
  ).toBeVisible();
});
