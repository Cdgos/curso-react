/* Fetch API - Permite hacer peticiones http a endpoints sin importar una libreria.
 - Ya viene incluida en JS.
 - fetch(`endpoint`) => retorna una promesa, por ende tiene metodos then, catch y finally.
*/

const apiKey = 'LQou0ziYzc7fndsNYDGk9vcKE9GCasjP';

// Random Endpoint de Giphy
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

// .json() => Obtener data respuesta, es otra promesa.
// Encadenamiento de promesas:

peticion
    .then( resp => resp.json() ) 
    .then( ({ data }) => { // Desestructuramos data para evitar hacer data.data
        console.log(data)
        console.log( data.images.original.url )

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn )