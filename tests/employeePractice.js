module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
        .pause(2000)
    },
    after: browser => {
        browser.end()
    },
    'Employee 1': browser => {
        browser

        var randomEmployee = {
            Name: 'Jason Voorhees',
            Phone: '6666666666',
            Title: 'Camp Administrator'
        
        
        .click('[name="employee1"]')
        .pause(1)
        .click('[name="phoneEntry"]')
        .clearValue('[name="phoneEntry"]')
        .pause(1)
        .setValue('[name="phoneEntry"]', randomEmployee.phone)
        .pause(1)
        // .click('[name="nameEntry"]')
        // .pause(1)
        // .clearValue('[name="nameEntry"]')
        // .pause(1)
        // .setValue('[name="nameEntry"]', 'I shot the Sheriff, but i do not shoot the deputy')
        // .pause(1)
        // .click('#saveBtn')
        // .pause(1)
        // .click('[name="cancel"]')
        // .pause(1)
        // .clearValue('[name="phoneEntry"]')
        // .pause(1)
        // .setValue('[name="phoneEntry"]', '123456789')
        // .pause(1)
        // .click('#saveBtn')
        // .pause(1)
        // .clearValue('[name="titleEntry"]')
        // .pause(1)
        // .setValue('[name="titleEntry"]', 'this should not happen because its more that 30 characters')
        // .pause(1)
        // .click('#saveBtn')
        // .pause(1)
        // .click('[name="employee4"]')
        // .pause(1)
        // .clearValue('[name="nameEntry"]')
        // .pause(1)
        // .setValue('[name="nameEntry"]', 'Ish me la no i will not let him go')
        // .pause(1)
        // .click('#saveBtn')
        // .pause(1)
        // .click('[name="employee9"]')
        // .pause(1)
        // .setValue('[name="nameEntry"]', 'This is SPARTA!')
        // .pause(1)
        // .click('#saveBtn')
        // .pause(1)
        // .click('#saveBtn')
        // .pause(1)
        // .click('[name="cancel"]')
        // .pause(1)
        




        }



    }
}