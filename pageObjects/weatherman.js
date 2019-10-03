
var weathermanCommands = {
    search: function (data) {
        this
            .setValue('@searchBar', data.search)
            .click('@searchButton')
            .waitForElementPresent('@resultCity')
            .expect.element('@resultCity').text.to.equal(data.result)
        this
            .click('button')
        return this
    }
}


module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [weathermanCommands],
    elements: {
        searchBar: '.enter-location__input',
        resultCity: '.current-weather__location',
        errorMessage: '.error-message__message',
        searchButton: 'button'
    }
}