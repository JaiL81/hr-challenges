var numeroViviendas = 0;

function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        var uso = line.length >= 427 ? line.charAt(427) : ''
        if (uso === 'V') {
            numeroViviendas += 1;
        }
        console.log(uso);
    });
    
    rl.on('close', function (line) {
        console.log(line);
        console.log(numeroViviendas)
        console.log('done reading file.');
    });
}
processFile('ronda.CAT');
