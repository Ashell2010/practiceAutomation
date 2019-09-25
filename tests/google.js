  module.exports = {
      beforeEach: browser => {
          browser.url('http://www.google.com')
      },
      after: browser => {
          browser.end()
      },
      'Google Search': browser => {
          browser
          .setValue('input[name="q"]', ['Taco Tuesday', browser.Keys.ENTER])
          .assert.value('input[name="q"]', 'Taco Tuesday',)
          


     }
 }