// Funciones

// ====== Funcion basica, se pueden reasignar por error ======
function saludar( nombre ){
    return `Hola, ${ nombre }`;
}

// saludar = 30 -> Imprime 30 en consola.

console.log(saludar('Sebastian'));

// ====== Funcion constante, recomendada para no reasignar por error: ======
const saludarDos = function( nombre ){
    return `Hola, ${ nombre }`;
}

// saludarDos = 20; -> Arrojaria error por intentar asignar valor a una constante.

console.log(saludarDos('Johan'));


// ====== Funciones flecha o lambda ====== //
const saludarFlecha = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log(saludarFlecha('Funcion flecha'));

// Ventaja 1 flecha: Si el cuerpo solo tiene un return (1 linea) simplificamos:
const saludarFlechaCorta = ( nombre ) =>  `Hola, ${ nombre }`;
console.log(saludarFlechaCorta('Funcion flecha corta'));

// Si queremos devolver un objeto implicito en 1 sola linea debemos envolverlo en ():
const getUser = () => ({
    uid: 'ABC123',
    username: 'Cdgos'
});

const user = getUser()
console.log(user)

// Si no recibe argumentos:
const saludarFlechaCorta2 = () =>  `Hola, funcion flecha corta sin parametros`;
console.log(saludarFlechaCorta2());


// === TAREA ====
// 1. Transformar a una funcion de flecha
// 2. Retornar un objeto implicito ()
// 3. Probar
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Santiago');
console.log( usuarioActivo );
