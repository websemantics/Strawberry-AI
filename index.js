/**
 *                                    O
 *                                     \
 *                                     /_
 *                                       \
 *                                /░░░░░░░|░░░░░░\
 *                          /░░░░░░░░░░░░░|░░░░░░░░░░░░\
 *                        /░░░░░░░░░░░░░░░|░░░░░░░░░░░░░░\
 *                        \░░░░░░░░░░░░░░░|░░░░░░░░░░░░░░/
 *                         \░░░░░░░░░░░░░░|░░░░░░░░░░░░░/
 *                           \░░░░░░░░░░░░|░░[ ]░░[]░░░/
 *                            \░░░░░░░░░░░|░░░░░░░░░░░/
 *                             \░░░░░░░░░░|░░░░░~~░░░/
 *                               \░░░░/▒▒▒▒▒▒\░░░░░░/
 *                                 /▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\
 *                                   \▒▒▒▒▒▒▒▒▒▒/
 *
 *                 __  ___  ___  _   _ _ _  ___ ___  ___ ___ __ __     _   _
 *                / _||_ _|| o \/ \ | | | || o ) __|| o \ o \\ V /    / \ | |
 *                \_ \ | | |   / o || V V || o \ _| |   /   / \ / __ | o || |
 *                |__/ |_| |_|\\_n_| \_n_/ |___/___||_|\\_|\\ |_||__||_n_||_|
 *
 *                L E A R N I N G   T O   O P E N   T H E   W E B   D O O R S
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
