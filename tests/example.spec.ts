import { test, expect } from '@playwright/test';

test('has right page title', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Welcome to Next.js with Tailwind CSS!')).toBeVisible();
});

