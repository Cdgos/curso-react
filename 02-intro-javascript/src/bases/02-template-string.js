// Template Strings `${codigo javascript}`=> Concatenar variables, multilineas, etc ...

const nombre = 'Sebastian';
const apellido = 'Casadiegos';

//const nombreCompleto = nombre + ' ' + apellido; Uso normal ...

// Usos:
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

const operacion = `${1 + 1}`;
console.log(operacion);

// Ejemplo llamando funcion dentro de un ` `.
function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);