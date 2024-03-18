// 42. PropTypes: Vite no las tiene: yarn add prop-types
import PropTypes from 'prop-types'

// 39. Impresion variables en HTML.
const newMessage = 'Sebastian'; 
const arr = [1, 2, 3, 4, 5];
const obj = {
    message: 'Hola mundo',
    title: 'Impresion de objetos'
}

const saludo = () => ('Hola como estan??');

// 41. Props => Propiedades a las functionals components.
export const FirstApp = ({ title, subtitle, name }) => {

    // console.log(props);

    return (
        // 38. Fragment sin importar <>Agrupador elementos JSX</>
        <>
            <h1>{ title }</h1>
            <p>{ subtitle + 1 }</p>
            <p>{ name }</p>
            <h2>Hola soy { newMessage }</h2> 
            <p>Tengo 23 anios</p>
            <p>Impresion de variables { arr }</p>
            {/* <code>Impresion de obj: <br /> { JSON.stringify( obj ) }</code> */}
            <p>Impresion de propiedad obj { obj.message }</p>

            <h2>{ saludo() }</h2>
        </>
    )
}

// 42. PropTypes: Definimos tipos a nuestras props y otra propiedades
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

// 43. DefaultProps => Muestre valores por defecto de las props.
FirstApp.defaultProps = {
    name: 'Sebastian Casadiegos',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
}
