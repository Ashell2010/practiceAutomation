// var employeeDis
// var idFinder = (employeeDis) =>{
//     employeeDis
//     .click('[name="employee11"]')
//     .getText('[name="employeeID"]', function(result){
//         let idNumber = Number(result.value.slice(3))
//         employeeDis
//          .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
//          .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)  
//     })


// }
// var changeEmployee = (employeeDis, change) =>{
//     employeeDis
//     .click(`li[name="employee${change.name}]`)
//     .waitForElementVisible('')
//     .getText("", function (result){
//         console.log(result.value)
//     })
//     .clearValue('@nameField')
//     .setValue('@nameField', change.name)
//     .clearValue('@phoneField')
//     .setValue('@phoneField',change.phone)
//     .clearValue('@titleField')
//     .setValue('@titleField', change.title)
//     .click('@saveButton')
//     .click(`lil[name="employee${change.number2}"]`)
//     .expect.elements('@cardTitle').text.not.to.equel(change.name)
//     employeeDis
//     .click(`li[name="employee${change.number}"]`)
//     .verify.valueContains('@nameField', change.name)
//     .verify.valueContains('@phoneField', change.phone)
//     .verify.valueContains('@titleField', change.title)


// }
// var myData = {
//     name: 'kim frank',
//     phone: '1234512345',
//     title: 'Sofa King Annoying',
//     number: '5',
//     number2: '8'
// }    
// module.exports = {
//     beforeEach: browser => {
//         employeeDis = browser.page.employeeObject()
//         employeeDis.navigate()
//     },
//     after: browser => {
//         browser.end()
//     },
//     'Change Employee test': employeeDis =>{
//         employeeDis
//         changeEmployee(page, myData)
//     },
//     'addEmployee': employeeDis => {
//         employeeDis
//         var employee = {
//             name: 'Jason Voorhees',
//             phone: '6666666666',
//             title: 'Camp Counselor',
//         }

//         employeeDis
//             .click('@addnewBtn')
//             .click('[name="employee11"]')
//             .clearValue('@nameField')
//             .setValue('@nameField', employee.name)
//             .assert.valueContains('@nameField', employee.name)
//             .clearValue('@phoneField')
//             .setValue('@phoneField', employee.phone)
//             .assert.valueContains('@phoneField', employee.phone)
//             .clearValue('@titleField')
//             .setValue('@titleField', employee.title)
//             .click('@saveBtn')
//             .api.pause(2000)
//             idFinder(employeeDis)

//             employeeDis

//             .click('[name="employee7"]')
//             .clearValue('@nameField')
//             .setValue('@nameField', employee.phone )
//             .click('@cancelBtn')
//             .api.pause(2000)








//     }
// }


let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeObject()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'It can add an employee': browser => {
        manager
            .click('@addButton')
            .clickEmployee('New Employee')
            .expect.element('@cardTitle').text.to.equal('New Employee')
    },
    'It can edit a new employee': browser => {
        manager
            .click('@addButton')
        addFromEditTest(manager, 'New Employee', { name: "Hank hill", phone: "1234567890", title: "Grill Master" }, "Dollie Berry")

        //     .clickEmployee('New Employee')
        //     .editEmployee({ name: 'Hank Hill', phone: '0000000000' })
        //     .click('@saveButton')
        //     .expect.element('@cardTitle').text.to.equal('Hank Hill')
        // manager
        //     .clickEmployee('Dollie Berry')
        //     .expect.element('@cardTitle').text.to.equal('Dollie Berry')
        // manager
        //     .clickEmployee('Hank Hill')
        //     .expect.element('@cardTitle').text.to.equal('Hank Hill')
    },
    'It can edit an existing employee': browser => {
        editTest(manager, 'Dollie Berry', { name: 'Dollie Berry', phone: '1234567890', title: 'Master and Commander' }, 'Bernice Ortiz')
        // manager
        //     .clickEmployee('Dollie Berry')
        //     .editEmployee({ title: 'Master and Commander' })
        //     .click('@saveButton')
        //     .clickEmployee('Bernice Ortiz')
        //     .expect.element('@cardTitle').text.to.equal('Bernice Ortiz')
        // manager
        //     .clickEmployee('Dollie Berry')
        //     .expect.element('@titleField').value.to.equal('Master and Commander')
    },
        'It can edit an existing employee': browser => {
            manager
            editTest('Bernice Ortiz', test, 'Lou White')
        }
    
}

