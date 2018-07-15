import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Recipe from './Recipe';
import App from '../App';
import ErrorComp from './ErrorComp';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={ErrorComp} />
        </Switch>
    </BrowserRouter>
);

export default  Router;