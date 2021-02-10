import React from 'react'
import { api } from '../../utils'
import { Layout, Main } from "../../components"

//aca TENGO QUE MOSTRAR LAS CARDS
export const Tareas = ({ titulo }) => {
    api
        .get("/tareas.json")
        .then((response) => {
            // setTitulo({ titulo: data });
            console.log(response.data);
        })
        .catch((error) => console.log(error));

    return (
        <>
            <Layout>
                <Main />
            </Layout>
        </>
    )
}

