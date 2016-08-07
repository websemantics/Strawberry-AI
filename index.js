/**
 *
 *                      O
 *                       \
 *                       /_
 *                         \/░░░░░░░|░░░░░░\
 *                    /░░░░░░░░░░░░░|░░░░░░░░░░░░\
 *                  /░░░░░░░░░░░░░░░|░░░░░░░░░░░░░░\
 *                  \░░░░░░░░░░░░░░░|░░░░░░░░░░░░░░/
 *                   \░░░░░░░░░░░░░░|░░░░░░░░░░░░░/
 *                     \░░░░░░░░░░░░|░░[ ]░░[]░░░/
 *                      \░░░░░░░░░░░|░░░░░░░░░░░/
 *                       \░░░░░░░░░░|░░░░░~~░░░/
 *                          \░░░░/▒▒▒▒▒▒\░░░░░░/
 *                           /▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\
 *                             \▒▒▒▒▒▒▒▒▒▒/
 *
 *
 *                   _   __   __ _ __  _    __  _
 *                  | | /__\ / _] |  \| |  /  \| |
 *                  | || \/ | [/\ | | ' | | /\ | |
 *                  |___\__/ \__/_|_|\__| |_||_|_|
 *                  Learning to open the web doors
 *
 *
 * This project was released under MIT license.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

var page = require('webpage').create()
var config = require('./config.json')

/**
 * Capture screen
 *
 * @param {theme} string, theme name (antd, default)
 * @return {void}
 */

 page.captureScreen = function() {
   var file = 'screens/' + Date.now() + '.png'
   console.log('Screen captured at ' + file)
   page.render(file)
 }

 /* Open a page and take screenshot */

page.open(config.url, function (status) {
  if (status !== 'success') {
    console.log('Failed to load ' + config.url)
  } else {
    page.captureScreen()
  }
  phantom.exit()
})
