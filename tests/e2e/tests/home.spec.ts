/**
 * Copyright (c) 2023 SIGHUP s.r.l All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import { test, expect } from '@playwright/test';

test('page home snapshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100, fullPage: true, mask: [page.locator('.dynamic')]  });
});