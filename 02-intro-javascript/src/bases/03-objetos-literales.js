// Objetos literales o diccionarios => Consola {}

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5543434,
        lat: 14.3422,
        lng: 34.43234,
    }
};

console.log(persona);
console.log(persona.nombre); // Acceder a una clave del objeto, return valor.

console.table(persona);

// Clonar un objeto: Copia de la referencia, es el mismo objeto.
const persona2 = persona; // Incorrecto!!!        ^^^^
persona2.nombre = 'Peter';
console.log(persona2);

// Correcto: Operador spread ...
const persona3 = { ...persona }; // Crea un nuevo objeto copiando las propiedades del obj persona con el ...
console.log(persona3)