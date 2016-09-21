import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import Show from './components/grid/show';

export default (
   <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/show/:id' component={Show} />
   </Route>
);
