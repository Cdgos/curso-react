import { useState } from 'react';
import PropTypes from 'prop-types'


// 45. Evento onClick(funcion())
// 46. Hook useState(valorInicial) => Importar.

export const CounterApp = ({ value }) => {

    // Desestructuramos el return de useState, el segundo arg sera el que podamos modificar.
    const [ counter, setCounter ] = useState( value );

    const handleAdd = (event) => {
        console.log(event);

        setCounter( counter + 1 );
    }

    const handleSubstract = () => setCounter( counter - 1 )

    const handleReset = () => setCounter( value );


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>

            <button onClick={ handleSubstract }>
                -1
            </button>

            <button onClick={ handleReset }>
                Reset
            </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
