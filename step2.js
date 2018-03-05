/*
 *FUNCION hash(CADENA c) ES:
    ENTEROGRANDE resultado := 3;
    CADENA alfabeto := 'abcdegjkmnoprstuvwyz';
    PARA ENTERO32 i := 0; i < longitud(c); i += 1 HACER:
        resultado = resultado * 31 + alfabeto.indiceDe(c[i]);
    FINPARA
    DEVOLVER resultado;
FINFUNCION 
 */

 function hash(cadena) {
    let resultado = 3;

    const alfabeto = 'abcdegjkmnoprstuvwyz';

    for (let i = 0; i < cadena.length; i++) {
        resultado = resultado * 31 + alfabeto.indexOf(cadena[i])
    }

    return resultado;
 }

 const result = hash('fhilqx');

 console.log(result)