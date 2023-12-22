/**
 * Test Steps:
1. 
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Accounts tab 
5. Click on New button
6. Enter 'your name' as account name
7. Select Ownership as Public                                              
 8. Click save and verify Account name 
 
 */

 import { expect, test } from "@playwright/test";

 test("Create Account",async ({page}) => {
    
    //Login to https://login.salesforce.com
    page.goto('https://login.salesforce.com');
    await page.fill('#username', 'suren.127@gmail.com');
    await page.fill('#password', 'Testing@123');
    await page.click('#Login');
    await page.waitForSelector('text="Home"')
    
    //Click on toggle menu button from the left corner
    await page.click('div.slds-icon-waffle');
    await page.waitForLoadState('domcontentloaded');

    //Click view All and click Sales from App Launcher
    await page.click("[aria-label='View All Applications']");
    await page.waitForSelector("p[title^='Manage your sales']")
    const sales = page.locator("p[title^='Manage your sales']");
    await expect(sales).toContainText('Manage your sales');
    await page.click("p[title^='Manage your sales']");
    await page.waitForLoadState('domcontentloaded');

    //Click on Accounts tab 
    await page.click("text='Accounts'");
    //Click on New button
    await page.click("[title='New']");

    //Enter 'your name' as account name
    await page.fill("[name='Name']",'Suren');

    //Select Ownership as Public     
   await page.locator("button[aria-label^='Ownership']").click();
   await page.getByTitle('Public').click();

  await page.click("button[name='SaveEdit']");
    
 })