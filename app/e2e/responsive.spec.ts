import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should display desktop layout on large screens', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Desktop sidebar should be visible
    await expect(page.locator('aside').first()).toBeVisible();
    
    // Desktop header should be visible
    const desktopHeader = page.locator('header.hidden.lg\\:block');
    await expect(desktopHeader).toBeVisible();
    
    // Mobile header should be hidden
    const mobileHeader = page.locator('header.lg\\:hidden');
    await expect(mobileHeader).not.toBeVisible();
  });

  test('should display tablet layout on medium screens', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Mobile header should be visible
    const mobileHeader = page.locator('header.lg\\:hidden');
    await expect(mobileHeader).toBeVisible();
    
    // Desktop sidebar should be hidden
    const desktopSidebar = page.locator('aside.hidden.lg\\:block');
    await expect(desktopSidebar).not.toBeVisible();
  });

  test('should display mobile layout on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Mobile header should be visible
    await expect(page.getByLabel('Open navigation menu')).toBeVisible();
    
    // Logo should be visible in mobile header
    await expect(page.locator('img[alt="Quayle Applications"]').first()).toBeVisible();
    
    // Main content should be visible
    await expect(page.locator('#home')).toBeVisible();
  });

  test('should adapt navigation for different screen sizes', async ({ page }) => {
    // Test desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await expect(page.locator('nav.sticky')).toBeVisible();
    
    // Test mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('nav.sticky')).not.toBeVisible();
    await expect(page.getByLabel('Open navigation menu')).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Jim Floss');
    
    // Check for h2 headings
    const h2Elements = await page.locator('h2').all();
    expect(h2Elements.length).toBeGreaterThan(0);
  });

  test('should have accessible labels for interactive elements', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Menu button should have aria-label
    await expect(page.getByLabel('Open navigation menu')).toBeVisible();
    
    // Social links should have aria-labels
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.getByLabel('GitHub')).toBeVisible();
    await expect(page.getByLabel('LinkedIn')).toBeVisible();
  });

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const altText = await img.getAttribute('alt');
      expect(altText).toBeTruthy();
      expect(altText).not.toBe('');
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    // Tab through navigation items
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Enter should activate navigation
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBeTruthy();
  });

  test('should have external links with proper security attributes', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const externalLinks = await page.locator('a[target="_blank"]').all();
    
    for (const link of externalLinks) {
      const rel = await link.getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });
});

test.describe('Performance', () => {
  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
    
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should lazy load images', async ({ page }) => {
    await page.goto('/');
    
    // Images should have loading="lazy" attribute
    const images = await page.locator('img[loading="lazy"]').all();
    expect(images.length).toBeGreaterThan(0);
  });

  test('should not have console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Filter out known false positives
    const realErrors = consoleErrors.filter(
      (error) => !error.includes('favicon') && !error.includes('404')
    );
    
    expect(realErrors).toHaveLength(0);
  });
});
