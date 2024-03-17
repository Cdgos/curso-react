/* Promesas(argumento funcion callback(resolve, reject))

- El codigo se ejecuta de arriba hacia abajo de manera sincrona.
- Las promesas son asincronas, primero ejecuta lo sincrono y de ultimo se ejecuta la
promesa.

Argumentos convencionales, no necesariamente deben llamarse asi:

1) resolve => Otro callback que se ejecuta cuando la promesa es exitosa.
2) reject => Se ejecuta cuando falla y realiza algo.

*/

import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         // Tarea. Importar de 08-imp-ext el getHeroeById
//         const heroe = getHeroeById(2);
        
//         // console.log(heroe);
//         console.log('2 segundos despues') 

//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe');

//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log('Then de la promesa, se ejecuto exitosamente: Heroe\n', heroe)
// })
// .catch( err => console.warn(err) ); // Catch es para el reject.

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {

    setTimeout(() => {
        // Tarea. Importar de 08-imp-ext el getHeroeById
        const heroe = getHeroeById( id );
        
        // console.log(heroe);
        // console.log('2 segundos despues') 

        if(heroe)
            resolve(heroe);
        else
            reject(`No se pudo encontrar el heroe con id ${id}`);

    }, 2000);

});
}

// Ponemos un 20 para ejecutar el catch, un 4 para el then
getHeroeByIdAsync(5)
    .then( heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err) );
