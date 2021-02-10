import React, { useState } from 'react'
import { Layout } from "../../components";
import { api } from "../../utils"

export const AgregarTarea = () => {
    const [titulo, setTitulo] = useState();
    const [fecha, setFecha] = useState();
    const [descripcion, setDescripcion] = useState();
    const [asignado, setAsignado] = useState();

    // const [tarea, setTarea] = useState({});

    // Este handle on change hacia una funcion para todos los inputs
    // const handleOnChange = (e) => {
    //   const { name, value } = e.target;
    //   // setTarea({ ...tarea, [name]: value });
    // };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        api.post("/tareas.json", {
            titulo: titulo,
            fecha: fecha,
            descripcion: descripcion,
            asignado: asignado,
        });
    };
    return (
        <div>
            <Layout>
                <h1 className='m-4'>Agregar Tareas</h1>
                <div className='container'>
                    <form className="row gy-2 gx-3 align-items-center" onSubmit={handleOnSubmit}>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Titulo</label>
                            <input type="text" className="form-control" name="titulo" value={titulo} id="autoSizingInput" placeholder="Título" onChange={(e) => setTitulo(e.target.value)}></input>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Asignado</label>
                            <input type="text" className="form-control" id="autoSizingInput" placeholder="Asignado" name="asignado" value={asignado} onChange={(e) => setAsignado(e.target.value)}></input>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInputGroup">Fecha</label>
                            <div className="input-group">
                                <div className="input-group-text"></div>
                                <input type="date" className="form-control text-secondary" id="autoSizingInputGroup" placeholder="Username" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Escribir aquí" id="floatingTextarea2" style={{ height: '200px', width: '675px' }}></textarea>
                            <label for="floatingTextarea2" className="text-secondary m-1 p-3" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}>Escriba aquí...</label>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success mt-2">Agregar</button>
                        </div>
                    </form>
                </div>
            </Layout>
        </div >
    )
}
