var jq = require("jquery");
var NightMare = require("nightmare");
var jsonfile = require('jsonfile')
var numeral = require('numeral');

//var moment = require('moment')
//moment().format('ll')  


var nm = NightMare(/*
    {openDevTools: {
        mode: 'detach'
      },
      show: true}*/
);
var url = "http://www.chittorgarh.com/ipo/ipo_list.asp";

nm.goto(url)
    .wait(2000)
    .on('console', function (a,b,c){
        console.log(a,b,c)
    })    
    .evaluate(function () {                
        let gigs = [];    
        let id = 1;    
        $('tr').each(function () {   
            let tds = $(this).find('td');
            let t = tds.length;
            var company =  $(tds[0]).text(),
                    openDate = $(tds[1]).text(),
                    closeDate = $(tds[2]).text(),
                    offerPrice = $(tds[3]).text() || "0",
                    offerPrice = parseInt(offerPrice.substring(0,offerPrice.indexOf("/")));
                    issueType = $(tds[4]).text(),
                    issueSize = ($(tds[5]).text() || "0");

            if(t === 6){
                gigs.push({
                    id : id++,
                    data : {
                    0:company,
                    1: openDate,
                    2: closeDate,
                    3: offerPrice,
                    4: issueType,
                    5: issueSize,
                    6: ''                 
                }
                })            
            }
            

            /*let i = {};
            let str = $(this).text();
            if (str.match(/Career/gi)) {
                i["title"] = str;
                i["link"] = $(this).attr("href");
                gigs.push(i);
            }*/
           
        });
        return gigs;
    })    
    .end()    
    .then(function (result) {
        //console.log(result);
        jsonfile.writeFile('file.json', result, function (err) {
            console.error(err)
        })
    });