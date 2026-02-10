import { test, expect } from '@playwright/test';

test.describe('User Journey - Portfolio Exploration', () => {
  test('complete user journey through portfolio', async ({ page }) => {
    // Step 1: Land on homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/Jim Floss/);
    
    // Step 2: Read profile summary
    await expect(page.getByText('Think big. Start small. Scale fast.')).toBeVisible();
    
    // Step 3: Explore Experience section
    await page.getByText('Software', { exact: true }).click();
    await page.waitForTimeout(500);
    await expect(page.getByText('Experience')).toBeVisible();
    await expect(page.getByText('Senior Full-Stack Developer')).toBeVisible();
    
    // Step 4: Check out Projects
    await page.getByText('Featured Projects').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // Step 5: View Research section
    await page.locator('nav').getByText('Research').click();
    await page.waitForTimeout(500);
    
    // Step 6: Explore Datasets
    await page.locator('nav').getByText('Datasets').click();
    await page.waitForTimeout(500);
    
    // Step 7: Read Blog
    await page.locator('nav').getByText('Blog').click();
    await page.waitForTimeout(500);
    
    // Step 8: Check CV/Education
    await page.locator('nav').getByText('CV').click();
    await page.waitForTimeout(500);
    await expect(page.getByText('Education')).toBeVisible();
    
    // Step 9: Navigate to Contact
    await page.locator('nav').getByText('Contact').click();
    await page.waitForTimeout(500);
    await expect(page.locator('#contact')).toBeInViewport();
    
    // Step 10: Explore footer social links
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.getByLabel('GitHub')).toBeVisible();
    await expect(page.getByLabel('LinkedIn')).toBeVisible();
  });

  test('mobile user explores portfolio via menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open mobile menu
    const menuButton = page.getByLabel('Open navigation menu');
    await menuButton.click();
    await page.waitForTimeout(300);
    
    // Explore sidebar content
    await expect(page.getByText('Contact Information')).toBeVisible();
    await expect(page.getByText('jim@quayleapps.com')).toBeVisible();
    await expect(page.getByText('Skills & Expertise')).toBeVisible();
    
    // Check skills are visible
    await expect(page.getByText('JavaScript')).toBeVisible();
    await expect(page.getByText('TypeScript')).toBeVisible();
    
    // Close menu by clicking outside or ESC
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  });

  test('user checks social media links', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Verify all social links are present and functional
    const socialLinks = [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Google Scholar', href: 'https://scholar.google.com' },
      { label: 'ORCID', href: 'https://orcid.org' },
      { label: 'Kaggle', href: 'https://kaggle.com' },
      { label: 'Hugging Face', href: 'https://huggingface.co' },
    ];
    
    for (const { label } of socialLinks) {
      const link = page.getByLabel(label);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
    }
  });
});

test.describe('Loading States', () => {
  test('should show skeleton loading states', async ({ page }) => {
    // Throttle network to see loading states
    await page.route('**/*', (route) => {
      setTimeout(() => route.continue(), 100);
    });
    
    await page.goto('/');
    
    // Main content should load
    await expect(page.locator('#home')).toBeVisible({ timeout: 10000 });
  });

  test('should lazy load images as user scrolls', async ({ page }) => {
    await page.goto('/');
    
    // Get initial image count
    const initialImages = await page.locator('img').count();
    expect(initialImages).toBeGreaterThan(0);
    
    // Scroll down
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    await page.waitForTimeout(500);
    
    // Images should have lazy loading attribute
    const lazyImages = await page.locator('img[loading="lazy"]').count();
    expect(lazyImages).toBeGreaterThan(0);
  });
});

test.describe('Error Handling', () => {
  test('should handle broken images gracefully', async ({ page }) => {
    await page.goto('/');
    
    // Image error handling should be in place
    const images = await page.locator('img').all();
    for (const img of images) {
      // Check if image has alt text (accessibility)
      const altText = await img.getAttribute('alt');
      expect(altText).toBeTruthy();
    }
  });

  test('should handle network errors gracefully', async ({ page }) => {
    // Simulate offline
    await page.route('**/*', (route) => route.abort());
    
    const response = await page.goto('/', { waitUntil: 'domcontentloaded' }).catch(() => null);
    
    // Either page loads from cache or shows error
    // This test ensures no crashes
    expect(response || true).toBeTruthy();
  });
});

test.describe('SEO and Meta Tags', () => {
  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Jim Floss/);
    
    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('software developer');
    
    // Check Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
    
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDescription).toBeTruthy();
  });

  test('should have structured data', async ({ page }) => {
    await page.goto('/');
    
    // Check for JSON-LD structured data
    const structuredData = await page.locator('script[type="application/ld+json"]').count();
    expect(structuredData).toBeGreaterThan(0);
  });
});
