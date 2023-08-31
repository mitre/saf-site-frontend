import {test, expect} from '@playwright/test';

test('Blog Page', async ({page}) => {
  // Navigate to blog page
  await page.goto('/');
  await page.getByRole('link', {name: 'Blog'}).click();
  await expect(page).toHaveURL('/blog');

  await expect(
    page.getByRole('heading', {level: 2, name: 'Blog'})
  ).toBeVisible();
  // Click blog post
  await page.getByText('Learn About It! - SAF Training Experiences').click();
  await expect(page).toHaveURL(
    '/blog/2023-08-11/learn-about-it-saf-training-experiences?id=18'
  );
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Learn About It! - SAF Training Experiences'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {level: 2, name: 'The History of SAF Training'})
  ).toBeVisible();

  /** Below code can be used for future blog testing */

  // // Check image load
  // await expect(page.getByRole('img', {name: 'inspec_logo.png'})).toBeVisible();
  // await expect(
  //   page.getByRole('img', {name: 'Validation Lib Icon-Dark.svg'})
  // ).toBeVisible();
  // await expect(page.getByRole('img', {name: 'wtm.png'})).toBeVisible();

  // // Check video load
  // await expect(
  //   page
  //     .frameLocator('internal:attr=[title="YouTube video player"i]')
  //     .locator('.ytp-cued-thumbnail-overlay-image')
  // ).toBeVisible();

  // // Go to author page
  // await page.getByRole('link', {name: 'Test Author'}).click();
  // await expect(page).toHaveURL('/blog/authors?name=Test%20Author');
  // await expect(
  //   page.getByRole('heading', {level: 1, name: 'Test Author'})
  // ).toBeVisible();
  // await expect(page.locator('[id="Social\\ Medias"]')).toBeVisible();
  // await expect(page.getByText('Features Test')).toBeVisible();
});
