import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/main';
import Create from './pages/create';
import Quiz from './pages/quiz';

const Routes = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/create" component={Create} />
                <Route path="/quiz/:id" component={Quiz} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
