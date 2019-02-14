/*
 *FUNCION hash(CADENA c) ES:
    ENTEROGRANDE resultado := 3;
    CADENA alfabeto := 'abcdegjkmnoprstuvwyz';
    PARA ENTERO32 i := 0; i < longitud(c); i += 1 HACER:
        resultado = resultado * 31 + alfabeto.indiceDe(c[i]);
    FINPARA
    DEVOLVER resultado;
FINFUNCION 
hash('javaguay') devuelve 2724207026793
42201887587301538842321190871795270412537671711761118644170793575
​​​​​45463696790021260035501637457001215449014100014682406506
 */
var bigInt = require("big-integer");

function hash(cadena) {
    let resultado = bigInt(3);

    const alfabeto = 'abcdegjkmnoprstuvwyz';

    for (let i = 0; i < cadena.length; i++) {
        resultado = resultado.multiply(bigInt(31)).add(alfabeto.indexOf(cadena[i]))
    }

    return resultado;
 }

 const result2 = hash('zzzz');

 //console.log(result.value)
 console.log(result2.toString())

 function unhash(numero) {
    var alfabeto = "abcdegjkmnoprstuvwyz"; //fhilqx
    var treinatUno = bigInt(31)
    var mod = numero.mod(treinatUno);
    numero = numero.divide(treinatUno);

    var res = alfabeto.charAt(mod) + "";
    while (numero > bigInt(3)) {
        mod = numero.mod(treinatUno);
        numero = numero.divide(treinatUno);
        res += alfabeto.charAt(mod);
    }
    var res2 = "";
    for (var i = res.length - 1; i >=0; i--) {
      res2 += res.charAt(i);
    }
    return res2;
   // return numero;
 }

 const result = hash('javaguay');
 console.log(result.value)
 var un2 = unhash(bigInt(result.value));
 var un = unhash(bigInt('42201887587301538842321190871795270412537671711761118644170793575'));
 var ha = hash(un)
 console.log(ha.value)
 console.log(un2);
 var javalargo = hash('javaguayjavaguayjavaguayjavaguayjavaguayjavaguayjavaguay')
 console.log(javalargo.value)
 console.log(javalargo.value.join(''))
 console.log(unhash(bigInt(javalargo.value.join(''))))
 console.log(unhash(javalargo))
 console.log(unhash(hash('javaguayjavaguayjavaguayjavaguayjavaguayjavaguayjavaguay')))
 console.log(un)
 console.log(hash(un).value);

 //paso 4 de 6 121621