var google = require('google')

google.resultsPerPage = 25
var nextCounter = 0

google('Cochin Shipyard Ltd IPO pdf', function (err, res){
  if (err) console.error(err)
  for (var i = 0; i < 1; ++i) {
    var link = res.links[i];
    console.log(link.href)    
  }
})

//this is fix from featThree
//this is fix from hotfix
