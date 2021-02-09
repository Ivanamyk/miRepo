import React from 'react'
import { Layout } from "../../components";

export const AgregarTarea = () => {
    return (
        <div>
            <Layout>
                <h1 className='m-4'>Agregar Tareas</h1>
                <div className='container'>
                    <form className="row gy-2 gx-3 align-items-center">
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control" id="autoSizingInput" placeholder="Título"></input>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control" id="autoSizingInput" placeholder="Asignado"></input>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInputGroup">Username</label>
                            <div className="input-group">
                                <div className="input-group-text"></div>
                                <input type="date" className="form-control text-secondary" id="autoSizingInputGroup" placeholder="Username"></input>
                            </div>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Escribir aquí" id="floatingTextarea2" style={{ height: '200px', width: '675px' }}></textarea>
                            <label for="floatingTextarea2" className="text-secondary m-1 p-3">Escriba aquí...</label>
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
