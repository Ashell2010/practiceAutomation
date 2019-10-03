module.exports = {
    beforeEach: browser => {
        browser.url('https://www.livepickleball.com/')
    },
    after: browser => {
        browser.end()
    },
    pickleBallLogin: browser =>{
        browser

        .waitForElementVisible('.logo')
        .verify.containsText('.volunteerText', 'Be a part of the action')
        .click('.nav-link')
        .waitForElementVisible('.logo')
        .verify.containsText('h3', 'Login')
        .useXpath()
        .click('//input[@type="text"]')
        .setValue('//input[@type="text"]', 'qatest')
        .click('//input[@type="password"]')
        .setValue('//input[@type="password"]', 'testpass')
        .click('//button[@class="btn btn-primary"]')
        .pause(2000)
       

        
        

    }
}