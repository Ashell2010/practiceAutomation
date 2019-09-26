module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    elements: {
        addnewBtn: '[name="addEmployee"]',
        nameField: '[name="nameEntry"]',
        phoneField: '[name="phoneEntry"]',
        titleField: '[name="titleEntry"]',
        saveBtn: {
            selector: '//button[@id="saveBtn"]',
            locateStrategy: 'xpath'
        }
    }
}