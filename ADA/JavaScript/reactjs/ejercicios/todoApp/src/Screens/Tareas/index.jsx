import React, { useState, useEffect } from 'react'
import { api } from '../../utils'
import { Layout, Main } from "../../components"
import { objectToArray } from "../../helpers"

//le paso el valor de un array porque el objeto que en el cual voy a hacer el map es un array. antes de hacer el map
//en linea 8 si no le paso el array vacio me va a tirar error de undefined, porque no se puede hacer map de undefinded (lo tengo que llenar con array)

export const Tareas = () => {
    const [tareas, setTareas] = useState([])

    const handleOnClick = () => {
        window.open("http://localhost:3000/agregar")
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
        traer();
    }, []);

    return (
        <Layout>
            <Main titulo='Mis Tareas'>
                {tareas.map((tarea) => {
                    return (
                        <div className='container'>
                            <div className="card text-dark bg-light mb-3" style={{ width: "18rem" }}>
                                <div className="card-header bg-secondary text-light">{tarea.fecha}</div>
                                <div className="card-body">
                                    <h4 className="card-title mb-4"><b>{tarea.titulo}</b></h4>
                                    <p className="card-text">Descripcion: {tarea.descripcion}</p>
                                    <p className="card-text text-secondary">Asignado: {tarea.asignado}</p>
                                </div>
                            </div>
                        </div>
                    )
                })

                }
                <div>
                    <button className='btn btn-info mt-2' onClick={handleOnClick}>Agregar Tarea</button>
                </div>
            </Main>
        </Layout>
    )
}

