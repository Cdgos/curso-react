/* Operador condicional ternario */

// Forma tradicional
const activo = true;

let mensaje = '';

if ( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}

console.log( mensaje );

// Ternario
const msg = ( !activo ) ? 'Activo' : 'Inactivo';
console.log(msg);

// Forma corta para solo mostrar lo del if, no el else.
const msg2 = activo && 'Activo';
console.log(msg2) 
