var request = require("request");
var cheerio = require("cheerio");

request({
  uri: "http://madivachallenge.appspot.com/colors/121621",
}, function(error, response, body) {
  var $ = cheerio.load(body);
console.log($("p"))
  $(".row.quijote p").each(function() {
    var link = $(this).text();
   // var text = link.text();
    //var href = link.attr("href");

    console.log(link);
  });
});