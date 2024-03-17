// import y export + find()

// Importacion 1, por defecto, "heroes" puede ser cualquier nombre.
// Exportacion 2, constante debe llevar export.
// import heroes, {owners}  from "../data/heroes";
import heroes  from "../data/heroes";

// console.log( heroes, owners );


// Tarea busque el id del heroe de nuestro arreglo heroes.
// Encuentrame de heroes, el heroe donde su propiedad id sea igual al id del parametro a buscar.
// 1. find recibe una funcion callback como argumento
// 2. Buscara en cada uno de los elementos internamente y extraiga el PRIMER heroe
// 3. Por cada heroe hara la condicion y retornara la PRIMERA incidencia.

export const getHeroeById = (id) => {
    console.log("Busqueda id heroe:", id)
    return heroes.find( ( heroe ) => heroe.id === id );
}

// console.log( getHeroeById(2) );


/* El método filter() crea un nuevo array con todos los elementos 
que cumplan la condición implementada por la función dada. */

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('DC') );
// console.log( getHeroesByOwner('Marvel') );