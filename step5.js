var request = require('request');
var cheerio = require('cheerio')
var url= '';
for (var i = 50; i < 100; i++) {
    url = 'http://madivachallenge.appspot.com/dado/' + i;
    request.get(url, (error, response, body) => {
        var $ = cheerio.load(body);
        var bienvenido = $('h4').text()
        //console.log(bienvenido)
        if (bienvenido !== 'Bienvenido al Madiva Challenge,') {
            console.log(url);    
            console.log(response)        
            console.log(i);
        } 
        
    })
}