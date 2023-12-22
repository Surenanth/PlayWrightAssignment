/*Test Steps: Create Lead
Assignment: 1
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/


import { chromium, expect, test } from "@playwright/test";

test("Create Lead in Salesforce", async () => {

    /* Used fixture {page} */
    const launchBrower = await chromium.launch({ headless: false, channel: 'chrome' })
    const newContext = await launchBrower.newContext();
    const page = await newContext.newPage();

    // Login to https://login.salesforce.com
    await page.goto('https://login.salesforce.com');
    await page.fill('#username', 'suren.127@gmail.com');
    await page.fill('#password', 'Testing@123');
    await page.click('#Login');
    await page.waitForSelector('text="Home"')

    await page.waitForLoadState('domcontentloaded');
    //Click on toggle menu button from the left corner
    await page.click('div.slds-icon-waffle');
    await page.waitForLoadState('domcontentloaded');

    // Click view All and click Sales from App Launcher
    await page.click("[aria-label='View All Applications']");
    await page.waitForLoadState('load');

    await page.waitForSelector("p[title^='Manage your sales']")
    const sales = page.locator("p[title^='Manage your sales']");
    await expect(sales).toContainText('Manage your sales');
    await page.click("p[title^='Manage your sales']");
  

    // Click on Leads tab 
    await page.click("text='Leads'");

    //  Click on New button
    await page.waitForSelector('text="New"')
    await page.click('text="New"')

    await page.waitForSelector("[name='Company']");
    // Enter the Last Name
    await page.getByPlaceholder("Last Name").fill("Balasundaram");

    // Enter the CompanyName 
    await page.fill("[name='Company']", "Cayuse");
    //  Select Salutation dropdown
    await page.locator("[name='salutation']").click();
    await page.getByTitle('Ms.').click();

    // Click Save and Verify Leads name created
    await page.click("[name='SaveEdit']");
    await page.waitForLoadState('load');

})





