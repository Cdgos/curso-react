import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Iron Man');

    const onInputChange = (event) => {
        // Aqui se almacena el valor del input, se puede desestructurar.
        // console.log(event.target.value);
        setInputValue(event.target.value)
    }

    // Un formularo hace un full refresh al dar enter, evitamos:
    const onSubmit = (event) => {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
        console.log(inputValue);
    } 

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={  (event) => onInputChange(event) }
            />
        </form>
    )
}
