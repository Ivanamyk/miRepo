import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './Login';
import { Signin } from './Signin';
import { HomePublic } from './HomePublic';

export const Public: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/singin' component={Signin} />
                <Route path='/login' component={Login} />
                <Route path='/' component={HomePublic} />
            </Switch>
        </Router>
    )
}