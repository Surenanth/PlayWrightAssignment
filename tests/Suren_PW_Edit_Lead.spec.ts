/*Assignment: 2 Edit Lead

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
import { chromium, expect, test } from "@playwright/test";
test("Edit Lead", async ({ page }) => {

    /*http://leaftaps.com/opentaps/control/main			
    1. Launch the browser
    2. Enter the username
    3. Enter the password
    4. Click Login*/
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState('load');
    await page.getByLabel('Username').fill('Demosalesmanager');
    await page.fill("#password", 'crmsfa');
    await page.click(".decorativeSubmit");
    await page.getByText('CRM/SFA').click();
    await page.waitForLoadState('load');

    //  Click on Create Lead
    await page.click("text=Leads");
    await page.locator("[href='/crmsfa/control/createLeadForm']").click();

    //Enter company name
    await page.fill('#createLeadForm_companyName', 'Cayuse LLC');

    //  Enter first name
    await page.fill('#createLeadForm_firstName', 'Suren');

    // Enter last name
    await page.fill('#createLeadForm_lastName', 'B');

    //.Click on Create Lead button  
    await page.click("[name='submitButton']");
    await page.waitForLoadState('load');

    //Click Edit
    await page.click("text=Edit");

    //Change the company name
    await page.fill('#updateLeadForm_companyName', 'Cayuse');

    //Click Update
    await page.click("[name='submitButton']");
    await page.waitForTimeout(5000);

})
