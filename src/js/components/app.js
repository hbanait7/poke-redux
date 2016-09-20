import React from 'react';
import Header from './header/headerContainer';
import Jumbotron from './jumbotron/jumbotronContainer';
import Grid from './grid/gridContainer';

const App = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Grid />
    </div>
  );
}

export default App;