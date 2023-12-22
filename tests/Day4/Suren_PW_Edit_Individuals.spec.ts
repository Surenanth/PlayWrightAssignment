
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


import { chromium, expect, test } from "@playwright/test";
test.only("Edit Individuals", async ({ page }) => {

    /* Used fixture {page} */
    //Login to https://login.salesforce.com
    await page.goto('https://login.salesforce.com');
    await page.fill('#username', 'suren.127@gmail.com');
    await page.fill('#password', 'Testing@123');
    await page.click('#Login');
    await page.waitForSelector('text="Home"')
    await page.waitForLoadState('domcontentloaded');

    //Click on the toggle menu button from the left corner
    await page.click('div.slds-icon-waffle');
    await page.waitForLoadState('domcontentloaded');

    // Click View All and click Individuals from App Launcher
    await page.click("[aria-label='View All Applications']");
    await page.waitForLoadState('load');

    //Click on the Individuals tab 
    await page.getByPlaceholder("Search apps or items...").fill('Individuals');
    await page.waitForLoadState('domcontentloaded');
    await page.click('.slds-truncate p mark');
    await page.waitForLoadState('domcontentloaded');

    //Search the Individuals last name
    await page.fill("input[name='Individual-search-input']", 'Balasundaram');
    await page.click("input[name='Individual-search-input']");
    await page.waitForLoadState('domcontentloaded');

    // Click on the Dropdown icon and Select Edit
    await page.click("span div[class^='forceVirtualActionMarker'] span");
    await page.click("span div[class^='forceVirtualActionMarker'] span");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('domcontentloaded');
    await page.click("a[title='Edit']");
    await page.waitForLoadState('domcontentloaded');

    //Select Salutation as 'Mr'
    await page.locator("div[class^='salutation'] div.uiPopupTrigger a[role='button']").click();
    await page.getByTitle('Mr.').click();

    //Now enter the first name
    await page.getByPlaceholder("First Name").fill("Suren");

    //Click on Save and Verify the first name
    await page.click("button[title='Save']");
    const fName = page.locator("a[title='Suren Balasundaram']");
    await expect(fName).toContainText('Suren');
    await page.waitForLoadState('load');

})
