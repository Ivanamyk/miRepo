import React, { useState } from 'react'
import { Layout, Main } from "../../../../components";
import { api } from "../../../../utils"

export const Add = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [assigned, setAssigned] = useState();

    // const [tarea, setTarea] = useState({});

    // Este handle on change hacia una funcion para todos los inputs
    // const handleOnChange = (e) => {
    //   const { name, value } = e.target;
    //   // setTarea({ ...tarea, [name]: value });
    // };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        api.post("/tareas.json", {
            title: title,
            date: date,
            description: description,
            assigned: assigned,
            status: 'pending'
        }).then(
            setTitle(''),
            setDate(''),
            setDescription(''),
            setAssigned(''),
        )
    };
    return (
        <div>
            <Layout hideFooter={true}>
                <Main titulo='Add New Task'>
                    <div className='container'>
                        <form className="row gy-2 gx-3 bg-light" onSubmit={handleOnSubmit}>
                            <div className="col-auto">
                                <label className="visually-hidden" for="autoSizingInput">Title</label>
                                <input type="text" className="form-control bg-white border" name="Title" value={title} id="autoSizingInput" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
                            </div>
                            <div className="col-auto">
                                <label className="visually-hidden" for="autoSizingInput">Assigned</label>
                                <input type="text" className="form-control bg-white border" id="autoSizingInput" placeholder="Assigned" name="assigned" value={assigned} onChange={(e) => setAssigned(e.target.value)}></input>
                            </div>
                            <div className="col-auto">
                                <label className="visually-hidden" for="autoSizingInputGroup">Date</label>
                                <div className="input-group">
                                    <input type="date" className="form-control bg-white text-secondary border" id="autoSizingInputGroup" placeholder="date" name="fecha" value={date} onChange={(e) => setDate(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control bg-white border" placeholder="Write something" id="floatingTextarea2" name="description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ height: '200px', width: '52%' }}></textarea>
                                <label for="floatingTextarea2" className="text-secondary mt-2 p-3" >Write something here...</label>
                            </div>
                            <div className="col-auto mt-2">
                                <button type="submit" className="btn btn-secondary m-2 shadow">Cancel</button>
                                <button type="submit" className="btn btn-success shadow">Add</button>
                            </div>
                        </form>
                    </div>

                </Main>
            </Layout>
        </div >
    )
}
