var cheerio = require("cheerio");
var fs = require("fs");

var $ = cheerio.load(fs.readFileSync("quijote.html"));

var parrafos = $(".row.quijote p")
  .map(function() {
    return $(this).text();
  })
  .get();

parrafos = parrafos.map(parrafo => parrafo.replace(/[^a-zA-Záéíóú ]/g, ""));
var palabras = parrafos
  .join(" ")
  .split(" ")
  .map(palabra => palabra.toLowerCase());
console.log(palabras.length);

var diccionario = palabras.reduce((palabrasMap, palabra) => {
  if (palabrasMap.has(palabra)) {
    var repeticiones = palabrasMap.get(palabra) + 1;
    palabrasMap.set(palabra, repeticiones);
  } else {
    palabrasMap.set(palabra, 1);
  }
  return palabrasMap;
}, new Map());
diccionario.forEach((value, key) => {
  if (value === 1169) {
    console.log(key);
  }
});
