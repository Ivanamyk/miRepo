import React, { FC, FormEvent, useState } from "react";
import { Layout, Main } from "../../../components";
import { Link } from 'react-router-dom'
import Logo from "../../../assets/img/logo.png";
import "./login.css";
import { useAuth } from '../../../hooks';


const Login: FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, authMsgError } = useAuth()


    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login({ email, password })
            .then(() => {
                setEmail('')
                setPassword('')
            })
    };

    return (
        <Layout hideHeader={true} hideAside={true}>
            <Main className={"backGround"}>
                <div className="login">
                    <div className=" row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow">
                                <div className="card-header pt-4 pb-4 text-center color">
                                    <img src={Logo} alt="ADA admin logo" height="50" />
                                </div>
                                <div className="card-body p-4">
                                    <h3 className="card-title text-center">
                                        <h4 className="text-dark-50 mt-0 font-weight-bold">
                                            Log in
                                        </h4>
                                        <h4 className="card-titletext-muted mb-4">
                                            Enter your email address and password to access.
                                        </h4>
                                    </h3>
                                    <form onSubmit={handleOnSubmit}>
                                        <div className="container">
                                            <div className="form-label">Email</div>
                                            <div className="form-control
                                                required"
                                                id="emai"
                                                placeholder="Enter your email"
                                            // value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <form className="mt-3">
                                            <label className="form-label">Password</label>
                                            <div className=" input-group-merge">
                                                <div className="form-control"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                // value={password} onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                        <form className="mt-3">
                                            <div className="form-check-label required">Remember Me</div>
                                        </form>
                                        {
                                            authMsgError != null ? (<div className="alert alert-danger p-2 m-2" role="alert"> {authMsgError} </div>) : (<span></span>)
                                        }
                                        <div className="text-center">
                                            <button className="btn-color" type="submit">
                                                Log In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <p className="text-muted">Don't have an account?
                                {/* <link to="/singin" className="text-muted ml-1"><b>Sign Up</b></link> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Layout>
    );
};

export { Login };