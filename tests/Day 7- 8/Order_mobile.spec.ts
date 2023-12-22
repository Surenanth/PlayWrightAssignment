
import { expect, test } from "@playwright/test";


test("ServiceNow -Ordering Mobile(Frames)", async ({ page }) => {

    // 1. Launch ServiceNow application
    await page.goto('https://dev195952.service-now.com');

    // 2. Login with valid credentials 
    await page.fill('#user_name', 'admin');
    await page.fill('#user_password', 'Testing@123');
    await page.click("button[type='submit']");

    // 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
    await page.getByRole("button", { name: 'All' }).click();
    await page.getByPlaceholder('Filter').fill('Service Catalog');
    await page.getByLabel('Service CatalogRequest').getByLabel('Service Catalog', { exact: true }).click();

    // 4. Click on  mobiles
    const frameLocator = page.frameLocator('iframe').first();
    await frameLocator.locator("table[role='presentation'] a[aria-label='Mobiles. Cell phones to meet your business needs.']").click();

    // 5. Select Apple iphone13pro
    await frameLocator.getByRole('link', { name: 'Apple iPhone 13 pro' }).click();

    // 6. Choose yes option in lost or broken iPhone
    await frameLocator.locator('label:has-text("Yes")').click();
    // 7. Enter phonenumber as 99 in original phonenumber field
    await frameLocator.locator("div[class^='col-xs-6'] input[class^='cat_item_option sc-content-pad form-control']").fill('99');
    // 8. Select Unlimited from the dropdown in Monthly data allowance
    await frameLocator.locator("select[class^='form-control cat_item_option ']").selectOption({ value: 'unlimited' });

    // 9. Update color field to SierraBlue and storage field to 512GB
    await frameLocator.locator('label:has-text("Sierra Blue")').click();
    await frameLocator.locator('label:has-text("256 GB [add $100.00]")').click();

    // 10. Click on Order now option
    await frameLocator.locator('button#oi_order_now_button').click();

    // 11. Verify order is placed
    const validation = frameLocator.locator("div[class^='notification notification-success'] span[aria-live='assertive']")
    console.log(validation);
    expect(validation).toContainText('Thank you, your request has been submitted');

})