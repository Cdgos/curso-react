/* Async - Await 

- Await: - Permite trabajar el codigo de manera sincrona.
         - Deben estar dentro de una funcion async
*/

const getImagen = async() => {

    try {
        const apiKey = 'LQou0ziYzc7fndsNYDGk9vcKE9GCasjP';
        // Espera a que el await termine
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
} 

getImagen();
