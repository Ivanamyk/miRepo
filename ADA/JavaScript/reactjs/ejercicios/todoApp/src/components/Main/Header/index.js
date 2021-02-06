import React from 'react'

export const Header = ({ titulo, handleOnClick }) => {
    return (
        <div className='header'>
            <h1>{titulo}</h1>
            <button onClick={handleOnClick}>Agregar</button>
        </div>
    )
}
