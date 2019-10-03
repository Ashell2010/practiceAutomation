var weatherPage

// var searchWeather = (pageObject, data) => {
//     // steps for your search go here
//     pageObject
//         .setValue('@searchBar', data.search)
//         .click('@searchButton')
//         .waitForElementPresent('@resultCity')
//         .expect.element('@resultCity').text.to.equal(data.result)
//     pageObject
//         .click('button')

// }

var myData = [
    { search: '84601', result: 'Provo' },
    { search: 'San Francisco', result: 'San Francisco' },
    { search: 'London', result: 'London' }
]


module.exports = {

    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    // 'Search for city': browser => {

    //     searchWeather(weatherPage, 'San Diego', 'San Diego')
    //     // weatherPage
    //     // .setValue('@searchBar', ['San Diego', browser.Keys.ENTER])
    //     // .waitForElementPresent('@resultCity')
    //     // .expect.element('@resultCity').text.to.equal('San Diego')
    // },
    // 'Search for zip': browser => {
    //     search(weatherPage, myData[0])
    //     // weatherPage
    //     //     .setValue('@searchBar', ['95820', browser.Keys.ENTER])
    //     //     .waitForElementPresent('@resultCity')
    //     //     .expect.element('@resultCity').text.to.equal('Sacramento')
    // },
    'Change weather tests': browser => {
        myData.forEach(test => {
            weatherPage
                .search(test)
        })
        // 'Search for blank': browser => {
        //     weatherPage
        //         .setValue('@searchBar', ['', browser.Keys.ENTER])
        //         .waitForElementPresent('@errorMessage')
        //         .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
        // },
        // 'Search for bad zip': browser => {
        //     weatherPage
        //         .setValue('@searchBar', ['123456789', browser.Keys.ENTER])
        //         .waitForElementPresent('@errorMessage')
        //         .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
        // },
        // 'Search again': browser => {
        //     weatherPage
        //         .setValue('@searchBar', '95820')
        //         .click('@searchButton')
        //         .waitForElementPresent('@resultCity')
        //         .click('@searchAgainButton')
        //         .expect.element('@searchBar').to.be.visible.before(5000)
        // },
        // 'Try again': browser => {
        //     weatherPage
        //         .setValue('@searchBar', '')
        //         .click('@searchButton')
        //         .waitForElementPresent('@errorMessage')
        //         .click('@tryAgainButton')
        //         .expect.element('@searchBar').to.be.visible.before(5000)
        // }
    }
}