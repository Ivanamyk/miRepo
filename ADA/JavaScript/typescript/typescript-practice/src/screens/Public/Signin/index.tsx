import React, { FC, FormEvent, useState } from "react";
import { Layout, Main } from "../../../components";
import Logo from "../../../assets/img/logoIndex.png";
import { useAuth } from '../../../hooks';
import { Link } from "react-router-dom";

const Signin: FC = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register } = useAuth()


    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register({ fullName, email, password })
            .then(() => {
                setFullName('')
                setEmail('')
                setPassword('')
            })
    };

    return (
        <Layout hideHeader={true} hideAside={true}>
            <Main className={"backGround"}>
                <div className="singin">

                </div>

            </Main>
        </Layout>
    );
};

export { Signin };