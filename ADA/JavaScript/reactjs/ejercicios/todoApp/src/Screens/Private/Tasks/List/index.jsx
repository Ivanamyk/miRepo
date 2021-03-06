import React, { useState, useEffect } from 'react'
import { api } from '../../../../utils'
import { Layout, Main } from "../../../../components"
import { objectToArray } from "../../../../helpers"
import { Card } from './components'
import './tarea.css'

//le paso el valor de un array porque el objeto que en el cual voy a hacer el map es un array. antes de hacer el map
//en linea 8 si no le paso el array vacio me va a tirar error de undefined, porque no se puede hacer map de undefinded (lo tengo que llenar con array)

export const List = () => {
    const [tareas, setTareas] = useState([])

    const handleOnClick = () => {
        window.open("http://localhost:3000/add")
    }

    const traer = () => {
        api
            .get("/tareas.json")
            .then((response) => {
                const datos = objectToArray(response.data);
                //a tareas le asigno el valor de datos a traves de setTareas (le cambio de un estado vacio a contener datos)
                setTareas(datos)

            })
            .catch((error) => console.log(error));
    }
    //uso udeEffect para evitar que se me recorra infinitas veces.
    useEffect(() => {
        //meto la funcion dentro de useEffect
        traer();
    }, []);

    return (
        <Layout>
            <Main titulo='My Tasks'>
                <div className='row'>
                    {tareas.map(({ title, description, assigned, date, status, id }) => {
                        return (
                            <Card
                                title={title}
                                description={description}
                                assigned={assigned}
                                date={date}
                                status={status}
                                id={id}
                            />
                        )
                    })

                    }
                    <div>
                        <button className='btn btn-dark m-3' onClick={handleOnClick}>Add Task</button>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

