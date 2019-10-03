module.exports ={
    beforeEach: browser =>{
        browser.url('https://www.amazon.com')
    },
    after: browser =>{

    },
    'amazon add to cart': browser =>{
        browser
        // adding Back Pack to cart
        .useXpath()
        .click('//a[@id="nav-link-accountList"]')
        .click('//a[@class="nav-link nav-item"]')[15]
        browser
        .pause(20)
        .click('//span[@class="nav-sprite nav-logo-base"]')
        .pause(20)
        .setValue('//input[@type="text"]', 'Laptop Backpacks')
        .click('//input[@value="Go"]')[0]
        browser
        .verify.containsText('//span[@class="a-color-state a-text-bold"]', 'laptop backpack')
        .click('//span[@class="a-size-base-plus a-color-base a-text-normal"]')[0]
        browser
        .click('//input[@id="add-to-cart-button"]')
        // adding Tattoo Set to cart
        .click('//span[@class="nav-sprite nav-logo-base"]')
        .pause(20)
        .setValue('//input[@type="text"]', 'tattoo set')
        .click('//input[@value="Go"]')[0]
        browser
        .verify.containsText('//span[@class="a-color-state a-text-bold"]', 'tattoo set')
        .click('//span[@class="a-size-base-plus a-color-base a-text-normal"]')[0]
        browser
        .click('//input[@name="submit.add-to-cart"]')
        // go to checkout
        .click('//a[@id="hlb-ptc-btn-native"]')
        .pause(20)
        // .setValue('//div[@class="a-row a-spacing-base"]', 'The Game')


    }
}