module.exports ={
    beforeEach: browser =>{
        browser.url('https://alpha.yoodlize.com/')
    },
    after: browser =>{
        browser.end()

    },
    'yoodlize': browser =>{
        browser
        .useXpath()
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Recreational Vehicles')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Outdoor Gear')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Electronics')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Party & Wedding Equipment')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Tools')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Clothing')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Home and Kitchen')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Toys and Games')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Lawn and Garden')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Sporting Equipment')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: DVDs')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Venues')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Music')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Business Equipment')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')

        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Misc')
        .waitForElementVisible('//img[@src="/images/logo/blueRaw.png"]')
        .click('//img[@src="/images/logo/blueRaw.png"]')
        

        
        .setValue('//input[@type="text"]','cars')
        .click('//i[@class="fal fa-search"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'cars')
        .click('//div[@class="_1WAWo"]')[0]
        browser
        .pause(10000)

        
        

        
        
        
    }

}