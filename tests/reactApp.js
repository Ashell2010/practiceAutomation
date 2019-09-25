module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Bernice Oriz': browser => {
        browser
            .click('[name="employee1"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', '123451234512345123451234512345')
            .verify.value('[name="nameEntry"]', '123451234512345123451234512345')
            .click('#saveBtn')
            // .verify.visible('.errorMessage')
            .expect.element(".errorMessage").not.to.be.visible
        browser
            .pause(2000)

    },
    'Marnie Barnett': browser => {
        browser
            .click('[name="employee2"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', '1234512345123451234512345123451')
            .verify.value('[name="nameEntry"]', '1234512345123451234512345123451')
            .click('#saveBtn')
            .verify.visible('.errorMessage')
            .pause(2000)

            .click('[name="employee9"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'Johnny Bravo')
            .click('#saveBtn')
            .pause(2000)
            .click('[name="employee2"]')
            .pause(2000)

            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '12345123451')
            .click('#saveBtn')
            .verify.visible('.errorMessage')
            .pause(3000)




    },
    'New Employee': browser => {
        browser
        .click('[name="addEmployee"]')
        .click('[name="employee11"]')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', 'Bruce Wayne')
        // .verify.elementPresent('[name="nameEntry"]', 'Bruce Wayne') this will not test for Bruce Wayne because its a value or an element
        .verify.value('[name="nameEntry"]', 'Bruce Wayne')
        // .verify.visible('.errorMessage')
        .pause(2000)
        .clearValue('[name="phoneEntry"]')
        .setValue('[name="phoneEntry"]', '8018675309')
        .verify.value('[name="phoneEntry"]', '8018675309')
        // .verify.visible('.errorMessage')
        .pause(2000)
        .clearValue('[name="titleEntry"]')
        .setValue('[name="titleEntry"]', 'Leader of the 313')
        .verify.value('[name="titleEntry"]', 'Leader of the 313')
        .pause(3000)



        

    }

}