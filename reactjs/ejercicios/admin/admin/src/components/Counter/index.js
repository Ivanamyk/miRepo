/*Consigna   <ul>
                <li>Dos botones con + y -</li>
                <li>Un input en medio de los dos botones que acepte numeros</li>
                <li>Al presionar los botones, el valor del input debe ir sumando o restando</li>
            </ul> */
import React, { useState } from 'react'

export const Counter = () => {
    //a useState se le puede pasar cualquier tipo de dato como valor inicial; strings, nums, boolean...

    //count es el nombre de la constante y seCount es lo que modifica su estado inicial
    const [count, setCount] = useState(0)
    const sum = () => {
        setCount(count + 1)
    }

    const rest = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button className="btn btn-success m-2" onClick={sum}>+</button>
            <input type="number" value={count}></input>
            <button className="btn btn-warning m-2" onClick={rest}>-</button>
        </div>
    )
}
