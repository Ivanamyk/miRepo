import React, { FC, FormEvent, useState, useEffect } from "react";
import { useHistory, Link, RouteComponentProps } from 'react-router-dom';
import { task } from "../../../../utils";
import { Layout, Main } from "../../../../components";


const Add: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [msj, setMsj] = useState('');
    const history = useHistory();
    const id = match.params.id;

    const createTask = async () => {
        await task.post({ title, date, assigned, description });
        alert('Tu tarea se cargo exitosamente');
        history.push('/tasks/')
    }


    const updateTask = () => {
        setIsLoading(true);
        task.patch({ id, title, date, assigned, description })
        setIsLoading(false);
        setMsj("Se Actualizo de forma exitosa");
        history.push('/tasks/');
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            updateTask();
        } else {
            createTask();
        }
    }

    useEffect(() => {
        if (id) {
            task.getId(id)
                .then(response => {
                    setTitle(response.title);
                    setDate(response.date);
                    setAssigned(response.assigned);
                    setDescription(response.description)
                })
        }
    }, [])


    return (
        <Layout>
            <Main title={"main"}>
                <form className="form" onSubmit={handleSubmit}>
                    {isLoading && "Cargando .........."}
                    {msj}
                    <div className="col-6">
                        <label className='form-label mb-2'></label>
                        <input className="form-control form-control-light mb-3" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label className='form-label mb-2'></label>
                        <input className="form-control form-control-light mb-3" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <label className='form-label mb-2'></label>
                        <input className="form-control form-control-light mb-3" type="text" value={assigned} onChange={(e) => setAssigned(e.target.value)} />
                        <label className='form-label mb-2'></label>
                        <textarea className="form-control form-control-light mb-3" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className="mt-3">
                            {/* <link type="button" className="btn btn-light border border-secondary mx-1" to={'/tasks/'}></link> */}
                            <button type="submit" className="btn btn-primary"></button>
                        </div>
                    </div>
                </form>
            </Main>
        </Layout>
    );
};

export { Add };