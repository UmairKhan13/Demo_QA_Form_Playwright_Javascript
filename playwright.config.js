// @ts-check
const { devices } = require('@playwright/test');

let outputDirectory = String("./test-environment/test-reports/")

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './test-environment/test-cases/',

  /* Maximum time one test can run for. */
  timeout: 600 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 6000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : undefined,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  outputDir: `${outputDirectory}/trace-output/`,
  reporter: [
    ['html', { outputFolder: `${outputDirectory}/playwright-report/` }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    actionTimeout: 15000,
    baseURL : 'https://demoqa.com/automation-practice-form/',
    ignoreHTTPSErrors: true,
    headless : false,
    video: 'on',
    trace: 'on',
    viewport: null,
    launchOptions: {
      slowMo: 500, //
      args: ["--start-maximized"],
    },
  },
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

module.exports = config;
