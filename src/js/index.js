import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store/store';
import { fetchAllPokemon } from './actions/gridActions';
import { pokemon } from './api/pokeApi';


store.dispatch(fetchAllPokemon(pokemon));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
