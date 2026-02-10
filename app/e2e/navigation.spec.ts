import { test, expect } from '@playwright/test';

test.describe('Navigation Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Jim Floss/);
    await expect(page.locator('h1')).toContainText('Jim Floss');
    await expect(page.locator('text=Senior Full-Stack Developer')).toBeVisible();
  });

  test('should display all navigation items on desktop', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    
    await expect(page.locator('nav').getByText('Home')).toBeVisible();
    await expect(page.locator('nav').getByText('Research')).toBeVisible();
    await expect(page.locator('nav').getByText('Software')).toBeVisible();
    await expect(page.locator('nav').getByText('Datasets')).toBeVisible();
    await expect(page.locator('nav').getByText('Blog')).toBeVisible();
    await expect(page.locator('nav').getByText('CV')).toBeVisible();
    await expect(page.locator('nav').getByText('Contact')).toBeVisible();
  });

  test('should navigate to different sections when clicking nav items', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Click Software section
    await page.locator('nav').getByText('Software').click();
    await page.waitForTimeout(500); // Wait for smooth scroll
    
    // Check if Experience section is visible
    await expect(page.locator('text=Experience').first()).toBeInViewport();
    
    // Click Blog section
    await page.locator('nav').getByText('Blog').click();
    await page.waitForTimeout(500);
    
    // Click Contact section
    await page.locator('nav').getByText('Contact').click();
    await page.waitForTimeout(500);
    
    // Check if Contact section is visible
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should highlight active navigation item', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Home should be active by default
    const homeButton = page.locator('nav button:has-text("Home")');
    await expect(homeButton).toHaveClass(/text-\[#87B1C1\]/);
    
    // Click Software and check it becomes active
    const softwareButton = page.locator('nav button:has-text("Software")');
    await softwareButton.click();
    await page.waitForTimeout(600);
    
    await expect(softwareButton).toHaveClass(/text-\[#87B1C1\]/);
  });

  test('should display mobile menu on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Mobile menu button should be visible
    const menuButton = page.getByLabel('Open navigation menu');
    await expect(menuButton).toBeVisible();
    
    // Desktop navigation should be hidden
    await expect(page.locator('nav').getByText('Home')).not.toBeVisible();
  });

  test('should open mobile menu and display sidebar content', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Click menu button
    const menuButton = page.getByLabel('Open navigation menu');
    await menuButton.click();
    
    // Wait for sheet to open
    await page.waitForTimeout(300);
    
    // Check if sidebar content is visible
    await expect(page.getByText('Contact Information')).toBeVisible();
    await expect(page.getByText('Akron, OH')).toBeVisible();
    await expect(page.getByText('Skills & Expertise')).toBeVisible();
  });

  test('should display main content sections', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Check for main sections
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.getByText('Think big. Start small. Scale fast.')).toBeVisible();
    
    // Scroll to see more sections
    await page.locator('#software').scrollIntoViewIfNeeded();
    await expect(page.getByText('Experience')).toBeVisible();
    
    await page.locator('#cv').scrollIntoViewIfNeeded();
    await expect(page.getByText('Education')).toBeVisible();
  });

  test('should load images with lazy loading', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Check if logo is loaded
    const logo = page.locator('img[alt="Quayle Applications"]').first();
    await expect(logo).toBeVisible();
    
    // Scroll down to trigger lazy loading
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
  });

  test('should have functional social links in footer', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check social links
    const githubLink = page.locator('footer a[aria-label="GitHub"]');
    const linkedinLink = page.locator('footer a[aria-label="LinkedIn"]');
    const scholarLink = page.locator('footer a[aria-label="Google Scholar"]');
    
    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
    await expect(scholarLink).toBeVisible();
    
    // Verify they open in new tab
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  test('should display copyright in footer', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('footer')).toContainText('Quayle Applications. All rights reserved.');
  });
});
