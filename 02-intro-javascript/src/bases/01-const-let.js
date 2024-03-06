// Variables y Constantes

const nombre = 'Sebastian';
const apellido = 'Casadiegos';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if(true){
    // Variables de Scope que solo existe en el bloque del if.
    const nombre = 'Johan';
    let valorDado = 6;
    console.log(nombre, valorDado);
}

console.log(valorDado); // 4

