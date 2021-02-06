
import React, { useState } from 'react'

//de esta forma le digo que los que tengan el nombre de estos hooks cambien a lo que le pase en useState
const Precio = () => {
    const [data, setData] = useState({
        currency: '',
        amount: ''
    })
    //esta funcion esta al tanto de si el input cambia. 
    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setData({
            //copio data para que no se sobreescriba
            ...data,
            //toma lo que pongo en mi input 'name' y lo guarda como value
            [event.target.name]: event.target.value
        })
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log(data.currency + ' ' + data.amount)
    }

    return (
        <>
            <form className='row' onSubmit={sendData}>
                <div className='container m-2'>
                    <div className='col-2 m-2'>
                        <h1 className='m-3'>Precio</h1>
                        <div className="input-group">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Currency</button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" name='currency' href="!#">USD</a></li>
                                    <li><a className="dropdown-item" href="!#">EUR</a></li>
                                    <li><a className="dropdown-item" href="!#">GBP</a></li>
                                </ul>
                            </div>
                            <input className="form-control" aria-label="Text input with dropdown button" onChange={handleInputChange}></input>
                        </div>
                    </div>
                    <div className='col-2 m-2'>
                        <input className='form-control' type='number' placeholder='Amount' name='amount' onChange={handleInputChange}></input>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-warning' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export { Precio };