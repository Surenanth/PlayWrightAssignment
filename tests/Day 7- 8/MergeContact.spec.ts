/*1. MergeContact (Alert and windowHandle)
// -----------		  
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page */

import { test } from "@playwright/test";
import { log } from "console";


test("MergeContact", async ({ page, context }) => {

    // 1. Launch URL "http://leaftaps.com/opentaps/control/login"
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // 2. Enter UserName and Password Using Id Locator
    await page.getByLabel('Username').fill('Demosalesmanager');
    await page.fill("#password", 'crmsfa');

    // 3. Click on Login Button using Class Locator
    await page.click(".decorativeSubmit");

    // 4. Click on CRM/SFA Link
    await page.getByText('CRM/SFA').click();

    // 5. Click on contacts Button
    await page.click("text=Contacts");

    // 6. Click on Merge Contacts using Xpath Locator
    await page.click('text=Merge Contacts');

    // 7. Click on Widget of From Contact
    const namelookuppage = context.waitForEvent("page");
    await page.getByRole('row', { name: 'From Contact Lookup' }).getByRole('link').click();
    const lookup = await namelookuppage;

    // 8. Click on First Resulting Contact
    await lookup.getByText('11461', { exact: true }).click();
    await lookup.close();

    const namelookuppage1 = context.waitForEvent("page");
    await page.getByRole('row', { name: 'To Contact Lookup' }).getByRole('link').click();
    const lookup1 = await namelookuppage1;
    await lookup1.getByText('DemoCustomer', { exact: true }).click();
    await lookup1.close();

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        //  dialog.message()
        await dialog.accept();

    })

    await page.getByRole('link', { name: 'Merge', exact: true }).click();
    await page.waitForTimeout(5000);
    const title = await page.title();
    console.log(title);
    
})