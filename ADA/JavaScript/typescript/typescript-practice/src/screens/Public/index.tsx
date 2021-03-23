import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './Login';
import { SingIn } from './Signin';
import { HomePublic } from './HomePublic';

export const Public: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/singin' component={SingIn} />
                <Route path='/login' component={Login} />
                <Route path='/' component={HomePublic} />
            </Switch>
        </Router>
    )
}