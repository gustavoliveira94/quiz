import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/main';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} />
                <Route path="/main" component={Main} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
