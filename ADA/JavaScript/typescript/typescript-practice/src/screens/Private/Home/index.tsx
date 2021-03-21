import React, { FC } from 'react';
import { Main } from "../../../components";
import { Pentagon, Triangle, Star, Octagon, App, Cloud, ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './home.css';


export const Home: FC = () => {
    return (
        <Main className='mainSize bg'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="home-wrapper">
                            <h2 className="text-dark">
                                Welcome!
                            </h2>
                            <Link to='/tasks' className="btn btn-secondary mt-4">Enter  &nbsp; <ArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation-effect-1">
                <Pentagon className='effect-icon text-prymary' />
            </div>
            <div className="animation-effect-2">
                <Triangle className="effect-icon text-danger" />
            </div>
            <div className="animation-effect-3">
                <Star className="effect-icon text-warning" />
            </div>
            <div className="animation-effect-4">
                <Octagon className="effect-icon text-success" />
            </div>
            <div className="animation-effect-5">
                <App className=" effect-icon text-info" />
            </div>
            <div className="animation-effect-6">
                <Pentagon className=" effect-icon text-primary" />
            </div>
            <div className="animation-effect-7">
                <Cloud className="effect-icon text-danger" />
            </div>
        </Main>
    )
}