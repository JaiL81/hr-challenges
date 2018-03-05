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
 */
var bigInt = require("big-integer");

 function hash(cadena) {
    let resultado = bigInt(3);

    const alfabeto = 'abcdegjkmnoprstuvwyz';

    for (let i = 0; i < cadena.length; i++) {
        resultado = resultado.multiply(31).add(alfabeto.indexOf(cadena[i]))
    }

    return resultado;
 }

 const result = hash('f');

 console.log(result.value)
 console.log(result.toString())

 function unhash(numero) {
    let resultado; 
    while (numero > 0) {
        numero = (numero + 1) / 31
    }

    return numero;
 }
 console.log(unhash(result.value));