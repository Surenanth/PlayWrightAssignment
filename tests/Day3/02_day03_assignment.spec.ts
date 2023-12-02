/*Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url*/

import { chromium, test } from "@playwright/test";

test("Login to Salesforce", async () => {

    //test.setTimeout(15000);

    const launchBrowser = await chromium.launch({ headless: false, channel: 'chrome' });
    const createContext = await launchBrowser.newContext();
    //console.log('createContext => '+ createContext);
    const page = await createContext.newPage();
    // console.log('page => '+ page);
    await page.goto('https://login.salesforce.com');

    await page.fill('#username', 'suren.127@gmail.com');
    await page.locator("[type='password']").fill('Testing@123');
    //page.fill("[type='password']",'Testing@123');
    await page.click('#Login');

    await page.waitForTimeout(15000);

    const title = await page.title();

    console.log('Application title name is => ' + title);

})


/*
Assignment - 2 (Create a new Lead)

1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 
 */

test("Create a new Lead", async () => {
    //test.setTimeout(15000);
    const launchBrowser = await chromium.launch({ headless: false, channel: 'chrome' });
    const createContext = await launchBrowser.newContext();
    const page = await createContext.newPage();
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.fill('#username', 'Demosalesmanager');
    await page.fill("#password", 'crmsfa');
    await page.click("[value='Login']");
    await page.waitForTimeout(5000);
    await page.locator("text=CRM/SFA").click();
    await page.waitForTimeout(5000);
    await page.locator("[href='/crmsfa/control/leadsMain']").click();
    await page.locator("[href='/crmsfa/control/createLeadForm']").click();
    await page.fill('#createLeadForm_companyName','Cayuse LLC');
    await page.fill('#createLeadForm_firstName','Suren');
    await page.fill('#createLeadForm_lastName','B');
    await page.click("[name='submitButton']");
    await page.waitForTimeout(5000);


})