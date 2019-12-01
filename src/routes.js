import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/main';
import Create from './pages/create';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/create" component={Create} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
