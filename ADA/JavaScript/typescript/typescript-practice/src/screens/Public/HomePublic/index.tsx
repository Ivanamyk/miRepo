import React, { FC } from 'react'
import { Main } from '../../../components'
import LogoIndex from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom';
import './homePublic.css';

const HomePublic: FC = () => {
    return (

        <Main className='bg-home'>
            <div className='container sign-home'>
                <img className='logoIndex' src={LogoIndex}></img>
                <h1 className='title-home'>ToDo App</h1>
                <Link to='/signin' id='sign-home'>Sign Up</Link>
                {/* <Link to='/login' className='log-home'>Log In</Link> */}
            </div>
        </Main>

    )
}
export { HomePublic }