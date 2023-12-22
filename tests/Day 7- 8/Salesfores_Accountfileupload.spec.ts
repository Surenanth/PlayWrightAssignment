import { test, expect } from "@playwright/test";
import path from "path";

test("SalesForce -Accounts (upload files)", async ({ page }) => {
    // 1.Login to Salesforce
    await page.goto('https://login.salesforce.com');
    await page.fill('#username', 'suren.127@gmail.com');
    await page.fill('#password', 'Testing@123');
    await page.click('#Login');
    await page.waitForSelector('text="Home"')

    // 2.Click on toggle menu
    await page.click('div.slds-icon-waffle');
    // 3.Search for Accounts
    await page.getByPlaceholder('Search apps and items...').fill('Accounts');

    // 4.Click the Accounts
    await page.locator("p[class='slds-truncate']").click();

    // 5.Click on the first resulting account name
    await page.getByRole('row', { name: 'Select item 1 Suren SB Show' }).getByRole('link').click();

    await page.focus("a[title='Upload Files']");

    const filechooser =  page.waitForEvent('filechooser',{timeout:10000});
    await page.locator("a[title='Upload Files']").click();
   
    const fileupload = await  filechooser;

    await fileupload.setFiles([path.join(__dirname,"Test.txt")]);
    
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Done' }).click();

    const status= page.locator("div[class^='slds-show_inline-block slds-float_left slds-p-left--x-small slds-truncate slds-m-right_x-small'] span[title=Test]").first();
    expect(status).toContainText('Test');

    
})