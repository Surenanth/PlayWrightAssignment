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

    await page.goto('https://login.salesforce.com');
    await page.fill('#username', 'suren.127@gmail.com');
    await page.fill('#password', 'Testing@123');
    await page.click('#Login');
    await page.waitForSelector('text="Home"')

    await page.waitForLoadState('domcontentloaded');
    await page.click('div.slds-icon-waffle');
    await page.waitForLoadState('domcontentloaded');
    await page.click("[aria-label='View All Applications']");
    await page.waitForLoadState('load');

    await page.waitForSelector("p[title^='Manage your sales']")
    const sales = page.locator("p[title^='Manage your sales']");
    await expect(sales).toContainText('Manage your sales');
    await page.click("p[title^='Manage your sales']");
    await page.waitForLoadState('domcontentloaded');
    await page.click("text='Leads'");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('text="New"')
    await page.click('text="New"')
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector("[name='Company']");
    await page.getByPlaceholder("Last Name").fill("B");
    await page.fill("[name='Company']", "Cayuse");
    await page.locator("[name='salutation']").click();
    await page.getByTitle('Ms.').click();
    await page.click("[name='SaveEdit']");
    await page.waitForLoadState('load');

})



/*Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

test("Edit Lead", async ({ page }) => {


    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState('load');
    await page.getByLabel('Username').fill('Demosalesmanager');
    await page.fill("#password", 'crmsfa');
    await page.click(".decorativeSubmit");
    await page.getByText('CRM/SFA').click();
    await page.waitForLoadState('load');
    await page.click("text=Leads");
    await page.locator("[href='/crmsfa/control/createLeadForm']").click();
    await page.fill('#createLeadForm_companyName', 'Cayuse LLC');
    await page.fill('#createLeadForm_firstName', 'Suren');
    await page.fill('#createLeadForm_lastName', 'B');
    await page.click("[name='submitButton']");
    await page.waitForLoadState('load');
    await page.click("text=Edit");
    await page.fill('#updateLeadForm_companyName', 'Cayuse');
    await page.click("[name='submitButton']");
    await page.waitForTimeout(5000);

})

/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
   7. Click save and verify Individuals Name
*/

test("Create Individuals", async ({page}) => {

    /* Used fixture {page} */
  
    await page.goto('https://login.salesforce.com');
    await page.fill('#username', 'suren.127@gmail.com');
    await page.fill('#password', 'Testing@123');
    await page.click('#Login');
    await page.waitForSelector('text="Home"')
    await page.waitForLoadState('domcontentloaded');
    await page.click('div.slds-icon-waffle');
    await page.waitForLoadState('domcontentloaded');
    await page.click("[aria-label='View All Applications']");
    await page.waitForLoadState('load');
    await page.getByPlaceholder("Search apps or items...").fill('Individuals');
    await page.waitForLoadState('domcontentloaded');
    await page.click('.slds-truncate p mark');
    await page.waitForLoadState('domcontentloaded');
    await page.locator("[data-id^='temp-'] one-app-nav-bar-item-dropdown  lightning-primitive-icon svg").click();
    await page.waitForLoadState('domcontentloaded');
    await page.click("a[role='menuitem'] span.slds-truncate span svg");
    await page.waitForLoadState('domcontentloaded');
    await page.getByPlaceholder("Last Name").fill("Balasundaram");
    await page.click("button[title='Save']");
    await page.waitForLoadState('load');

})



/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name
 */


test.only("Edit Individuals", async ( {page}) => {

    /* Used fixture {page} */

    await page.goto('https://login.salesforce.com');
    await page.fill('#username', 'suren.127@gmail.com');
    await page.fill('#password', 'Testing@123');
    await page.click('#Login');
    await page.waitForSelector('text="Home"')
    await page.waitForLoadState('domcontentloaded');
    await page.click('div.slds-icon-waffle');
    await page.waitForLoadState('domcontentloaded');
    await page.click("[aria-label='View All Applications']");
    await page.waitForLoadState('load');
    await page.getByPlaceholder("Search apps or items...").fill('Individuals');
    await page.waitForLoadState('domcontentloaded');
    await page.click('.slds-truncate p mark');
    await page.waitForLoadState('domcontentloaded');
    await page.fill("input[name='Individual-search-input']", 'Balasundaram');
    await page.click("input[name='Individual-search-input']");
    await page.waitForLoadState('domcontentloaded');
    await page.click("span div[class^='forceVirtualActionMarker'] span");
    await page.click("span div[class^='forceVirtualActionMarker'] span");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('domcontentloaded');
    await page.click("a[title='Edit']");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("div[class^='salutation'] div.uiPopupTrigger a[role='button']").click();
    await page.getByTitle('Mr.').click();
    await page.getByPlaceholder("First Name").fill("Suren");
    await page.click("button[title='Save']");

    await page.waitForLoadState('load');

})
