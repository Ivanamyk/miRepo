import React, { FC, FormEvent, useState, useEffect } from "react";
import { user } from "../../../../utils";
import { Layout, Main } from "../../../../components";
import { useHistory, Link, RouteComponentProps } from 'react-router-dom';



const AddUsersForm: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const id = match.params.id;

    const createUser = async () => {
        await user.post({ name, lastName, email, password });
        setName('');
        setlastName('');
        setEmail('');
        setPassword('');
    }

    const updateUser = async () => {
        await user.patch({ id, name, lastName, email, password })
        history.push('/users/');
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            await updateUser();
        } else {
            await createUser();
        }
    }

    useEffect(() => {
        if (id) {
            user.getId(id)
                .then(response => {
                    setName(response.name);
                    setlastName(response.lastname);
                    setEmail(response.email);
                    setPassword(response.password)
                })
        }
    }, [])

    return (
        <Layout>
            <Main className={"bg-light main"}>
                //don't forgrt onSubmit
                <div className="form">
                    <div className="col-6">
                        <div className="mb-2"></div>
                        <input className="form-control form-control-light mb-3" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <div className="mb-2"></div>
                        <input className="form-control form-control-light mb-3" type="text" name="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                        <div className="mb-2"></div>
                        <input className="form-control form-control-light mb-3" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="mb-2"></div>
                        <input className="form-control form-control-light mb-3" type={showPassword ? "text" : "password"} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="mt-3">
                            {/* <link to={'/users/'} type="button" className="btn btn-light border border-secondary mx-1"></link> */}
                            <button type="submit" className="btn btn-primary mx-1"></button>
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-info">Ver Password</button>
                        </div>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export { AddUsersForm }