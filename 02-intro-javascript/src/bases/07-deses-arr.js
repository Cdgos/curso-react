// Desestructuracion de arreglos

const personajes = ['Iron Man', 'Capitan America', 'Thor'];

console.log( personajes );
// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

const [ p1, p2, p3 ] = personajes;
console.log( p1, p2, p3 );

// Si solo necesito el 2do elemento: Omitimos una posicion con una ,
const [ , personaje ] = personajes;
console.log(personaje);

const retornaArreglo = () => {
    return ['ABC', 123];
}

// Ejemplo con retorno de funciones.
const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

console.log("\n====== DESESTRUCTURAR UNA FUNCION ======\n\n")
// Tarea
// 1. El primer valor del arr se llamara nombre.
// 2. Se llamara setNombre
const setState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = setState( 'Spiderman' )
console.log( nombre );
setNombre();