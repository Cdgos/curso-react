// Desestructuracion de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    //rango: 'Cientifico'
};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

console.log('\n=========== Desestructuramos ===========\n\n')

// Desestructuramos: extrae de persona, la llave { llave } y la usamos.
// Si una llave del obj se llama igual a una variable en nuestro Scope, renombramos llave:nombreNuevo y llave ya no se podria usar sino nombreNuevo

const { nombre, clave:clave_obj, edad } = persona; // No importa el orden que desestructuramos
console.log( nombre, clave_obj, edad )


console.log('\n=========== Ejemplo desestructurar en parametros, retorno funciones y objetos anidados ===========\n\n')

// Ejemplo 2: Desestructurar en el parametro de la funcion flecha solo lo que necesitamos
// Rango puede que no exista en el objeto pero lo podemos crear aqui y dar x defecto. Si la tiene, usa la del objeto.
const setContext = ({ nombre, edad, rango = 'Capitan' }) => { 
    //console.log(edad, nombre, rango);

    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 43.203,
            lng: 22.342
        }
    }
}

// De setContext(persona), extraeme el objeto latlng y de ese desestructurame sus llaves lat y lng {}
const { nombreClave, anios, latlng:{ lat, lng } } = setContext( persona );
console.log(nombreClave, anios)
console.log(lat, lng)