import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/main';
import Create from './pages/create';
import Quiz from './pages/quiz';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    exact
                    component={Main}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/create`}
                    component={Create}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/quiz/:id`}
                    component={Quiz}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
