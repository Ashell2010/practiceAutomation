var employeeDis
module.exports = {
    beforeEach: browser => {
        employeeDis = browser.page.employeeObject()
        employeeDis.navigate()
    },
    after: browser => {
        browser.end()
    },
    'addEmployee': browser => {
        var employee = {
            name: 'Jason Voorhees',
            phone: '6666666666',
            title: 'Camp Counselor',
        }
      
        employeeDis
            .click('@addnewBtn')
            .click('[name="employee11"]')
            .clearValue('@nameField')
            .setValue('@nameField', employee.name)
            .assert.valueContains('@nameField', employee.name)
            .clearValue('@phoneField')
            .setValue('@phoneField', employee.phone)
            .assert.valueContains('@phoneField', employee.phone)
            .clearValue('@titleField')
            .setValue('@titleField', employee.title)
            .click('@saveBtn')
            .api.pause(2000)

        



    }
}