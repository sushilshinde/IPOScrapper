var Xray = require('x-ray');
var x = Xray();

x('https://duckduckgo.com/?q=Security+and+Intelligence+Services+(India)+Ltd+IPO+pdf&ia=web', 
'body > h2')(function(err, title) {
  console.log(title) // Google
})

x('http://google.com', 'title')(function(err, title) {
  console.log(title) // Google
})