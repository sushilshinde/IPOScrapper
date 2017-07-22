var jq = require("jquery");
var NightMare = require("nightmare");
var nm = NightMare(
    /*{openDevTools: {
        mode: 'detach'
      },
      show: true}*/
);
var url = "https://newyork.craigslist.org/search/lbg?is_paid=all&postedToday=1";

nm.goto(url)
    .wait(2000)
    .evaluate(function () {
        console.log('...')
        let gigs = [];
        $('.hdrlnk').each(function () {
            let i = {};
            let str = $(this).text();
            if (str.match(/Career/gi)) {
                i["title"] = str;
                i["link"] = $(this).attr("href");
                gigs.push(i);
            }
        });
        return gigs;
    })
    .end()
    .then(function (result) {
        console.log(result);
    });