// tests/cookie-consent.test.js
const { test, expect } = require('@playwright/test');

test('navbar should be present and links should work', async ({ page }) => {
  // Navigate to the page that contains the CookieConsent component
  await page.goto('http://localhost:3000/');

  // Check if the navbar is in the DOM
  const navbar = page.locator('nav'); // Replace 'nav' with the actual selector for your navbar
  await expect(navbar).toBeVisible();

  // Check if the Privacy Policy link is present in the CookieConsent component
  const privacyPolicyLink = page.locator('text=Privacy Policy');
  await expect(privacyPolicyLink).toBeVisible();

  // Click the Privacy Policy link and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    privacyPolicyLink.click(),
  ]);

  // After clicking, the new URL should be the Privacy Policy page
  await expect(page).toHaveURL('http://localhost:3000/policy');

  // Optionally, you can test the content of the Privacy Policy page to ensure it loaded correctly
  // const privacyPolicyContent = page.locator('selector-to-privacy-policy-content');
  // await expect(privacyPolicyContent).toContainText('Your Privacy Policy text here');
});

test('Footer should be rendered on the page', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Adjust the URL to your application's URL
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});

test('Footer should contain the TRAILSTRIDE title', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Adjust the URL to your application's URL
  const title = page.locator('h3:has-text("TRAILSTRIDE")');
  await expect(title).toBeVisible();
});

test('Page should load with HeroSection component', async ({ page }) => {
  // Navigate to the page where the HeroSection component is rendered
  await page.goto('http://localhost:3000/'); // Replace with your actual URL

  // Check if the main heading is present
  const mainHeading = await page.locator('h1:has-text("TrailStride")').first();
  expect(mainHeading).toBeTruthy();

  // Check if the tagline is present
  const tagline = await page.locator('p:has-text("Make the most with what you travel with.")').first();
  expect(tagline).toBeTruthy();
});

test.describe('NavigationBar Component Tests', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    // Launch the browser and navigate to the page with the NavBar component
    page = await browser.newPage();
    await page.goto('http://localhost:3000/'); // Replace with your actual URL
  });

  test('should scroll to Styles/Shoes section', async () => {
    // Click the "Styles/Shoes" link
    await page.click('text=Styles/Shoes');

    // Wait for the page to scroll to the section (you may need to adjust the timeout)
    await page.waitForSelector('#styles');

    // Check if the URL contains the section's hash
    const url = page.url();
    expect(url).toContain('#styles');
  });

  test('should scroll to About Us section', async () => {
    // Click the "About Us" link
    await page.click('text=About Us');

    // Wait for the page to scroll to the section (you may need to adjust the timeout)
    await page.waitForSelector('#about');

    // Check if the URL contains the section's hash
    const url = page.url();
    expect(url).toContain('#about');
  });

  test('should scroll to Subscribe section', async () => {
    // Click the "Subscribe" link
    await page.click('text=Subscribe');

    // Wait for the page to scroll to the section (you may need to adjust the timeout)
    await page.waitForSelector('#subscribe');

    // Check if the URL contains the section's hash
    const url = page.url();
    expect(url).toContain('#subscribe');
  });

  test.afterEach(async () => {
    // Close the browser page after each test
    await page.close();
  });
});

test.describe('SignUpSection Component Tests', () => {
  // Start each test by navigating to the page where SignUpSection is rendered
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('should display the sign-up form', async ({ page }) => {
    // Check if the sign-up form is visible
    const signUpForm = await page.isVisible('form');
    expect(signUpForm).toBeTruthy();
  });

  test('should allow entering an email address', async ({ page }) => {
   // Enter an email address into the input field
   const emailInput = await page.locator('input[placeholder="Email Address"]');
   await emailInput.type('test@example.com');
   expect(await emailInput.inputValue()).toBe('test@example.com');
 });
});

test('StylesSection component should render', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const stylesSection = await page.$('#styles');
  expect(stylesSection).not.toBeNull();
});

test('Each style box should contain a description and a price', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Replace with your actual URL
  const styleBoxes = await page.$$('.styleBox');
  for (const box of styleBoxes) {
    const description = await box.$('.description');
    const price = await box.$('.price');
    expect(description).toBeTruthy();
    expect(price).toBeTruthy();
  }
});

test('TestimonialSection should render', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Replace with the correct URL
  const testimonialSection = await page.$('#about');
  expect(testimonialSection).not.toBeNull();
});