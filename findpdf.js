var scraper = require('google-search-scraper');
var jsonfile = require('jsonfile')

var j = null,arr=[];

jsonfile.readFile("file.json", function (err, obj) {
    j = obj;    
    j.forEach(function(item){
        //console.log("--------------------")
        //console.log(item["0"])
        p(item)
    })
    
    //p();
})



function p(item){        
    var options = {
        query: item["0"]+' pdf',
        limit: 1,
        item :item
    };
    var a = scraper.search(options, function (err, url,options) {        
        //arr[options.item.id] = url;
        console.log("---------------------");
        //console.log(item.id);
       
        options.item.link = url;        
        console.log(options);
    });
     console.log(a);
}
