import React from 'react';
import { Route, IndexRoute } from 'react-router';
import app from './components/app';

export default (
   <Route path='/' component = {app}>
     <IndexRoute component = {app} />
   </Route>
);
