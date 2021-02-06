import React from 'react'

export const Pagina = ({ actual, maximo }) => {
    return (
        <div className='container m-2'>
            <h1 style={{ fontSize: '35px' }}>Pagina</h1>
            <button>Previous</button>
            <button>1</button>
            <button>...</button>
            <button>{actual}</button>
            <button>...</button>
            <button>{maximo}</button>
            <button>Next</button>
        </div>
    )
}
