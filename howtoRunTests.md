# Run Test 
Navigate to the folder where the repo is cloned. 
Run 'npm init playwright@latest' to install playwright
More info: "https://playwright.dev/docs/intro"
Tests are present under src/pages/tests
To run the tests the test directory path needs to be changed. playwright.config.ts -> testDir: './src/tests',
Note: package.json and playwright.congif is already updated in this project. But it can be changes after installing playwright 

To run tests: npx playwright test (headless)
to run in headed mode. npx playwright test --headed
For more info about runing the tests: "https://playwright.dev/docs/test-cli"

