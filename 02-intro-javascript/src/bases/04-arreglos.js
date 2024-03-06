// Arreglos []

const arregloFijo = new Array(100); // Solo crearlo asi cuando sea un tamanio fijo
arregloFijo.push(1); // Se le pueden adicionar mas

console.log(arregloFijo);

// Tradicional:
const arreglo = [1, 2, 3, 4];
console.log(arreglo);


// Agregar datos a un arreglo

    // Incorrecto:
console.log('\nIncorrecto agregar datos push\n\n');

let arreglo2 = arreglo;
arreglo2.push(5); // No usar push porque modifica el arreglo original.

console.log(arreglo); // Le agrego el 5 al arreglo original.
console.log(arreglo2); // Observamos en consola que a ambos le agrego el 5.

    // Correcto: ...spread
console.log('\nCorrecto agregar datos spread ...\n\n');

let arreglo3 =  [...arreglo, 6];

console.log(arreglo); // No modifico el arreglo original, que va hasta el 5.
console.log(arreglo3); // Solo agrego el 6 a nuestra copia.


/* .map(funcion()) => Crea un nuevo array con los resultados de la llamada a la funcion indicada 
aplicados a cada uno de sus elementos */

console.log('\n.map(funcion())\n\n');

let arreglo4 = arreglo3.map( function(numero){
    return numero * 2; // Multiplica cada posicion de arreglo3 por 2 y lo retorna en un nuevo arreglo.
} );

console.log(arreglo4);