import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search' ;
import Product from './pages/Product' ;

 const Routes = () => (
    <Switch>
      <Route exact path='/fiap_react_master/' component={ Search } />
      <Route exact path='/fiap_react_master/product/:id' component={ Product } />
      <Route exact path='/' component={ Search } />
      <Route exact path='/product/:id' component={ Product } />
      <Route component={ () => ( <div>Page not found</div> ) } />
    </Switch>
);

 export default Routes;