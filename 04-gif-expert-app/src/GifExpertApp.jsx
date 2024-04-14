import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Otro' ]);

    const onAddCategory = () => {
        // Usando el operador spread para crear una nueva copia del arreglo con el nuevo elemento
        // Debido a que usamos un arreglo en el estado, debemos devolver lo mismo.
        // No usar .push()
        setCategories([...categories, 'Valorant']);
    }

    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory />
        
        <button onClick={ onAddCategory }>Agregar</button>
        {/* Listado de Gif */}
        <ol>
            { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                } 
            )}
        </ol>


    </>
    )
}
