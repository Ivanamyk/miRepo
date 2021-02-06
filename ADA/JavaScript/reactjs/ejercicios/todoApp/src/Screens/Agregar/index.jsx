import React from 'react'
import { Layout, Main } from "../../components";

export const AgregarTarea = () => {
    return (
        <div>
            <Layout>
                <Main>
                    <h1>Agregar Tareas</h1>
                    <form>
                        <input placeholder='Titulo'></input>
                    </form>
                </Main>
            </Layout>

        </div>
    )
}
