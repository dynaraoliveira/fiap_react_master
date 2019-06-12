import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Product  from './pages/Product';
import Search from './pages/Search' ;

const Routes = () => (
    <Switch>
        <Route
            exact
            path='/'
            component={ Search }
        />
        <Route
            exact
            path='/Product/:id'
            component={ Product }
        />
        <Route
            component={ () => (
                <div>Page not found</div>
            ) }
        />
    </Switch>
);

export default Routes;
    