

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

import { chromium, expect, test } from "@playwright/test";
test("Create Individuals", async ({ page }) => {

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

    //Click View All and click Individuals from App Launcher
    await page.click("[aria-label='View All Applications']");
    await page.waitForLoadState('load');
    await page.getByPlaceholder("Search apps or items...").fill('Individuals');
    await page.waitForLoadState('domcontentloaded');
    await page.click('.slds-truncate p mark');
    await page.waitForLoadState('domcontentloaded');

    //Click on the Dropdown icon in the Individuals tab
    await page.locator("[data-id^='temp-'] one-app-nav-bar-item-dropdown  lightning-primitive-icon svg").click();
    await page.waitForLoadState('domcontentloaded');

    //Click on New Individual
    await page.click("a[role='menuitem'] span.slds-truncate span svg");
    await page.waitForLoadState('domcontentloaded');

    //Enter the Last Name
    await page.getByPlaceholder("Last Name").fill("Balasundaram");

    //Click save and verify Individuals Name
    await page.click("button[title='Save']");
    await page.click("a[href='/lightning/o/Individual/home']");
    await page.waitForLoadState('domcontentloaded');
    const fName = page.locator("a[title='Balasundaram']");
    await expect(fName).toContainText('Balasundaram');
    await page.waitForLoadState('load');

})

