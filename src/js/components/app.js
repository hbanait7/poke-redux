import React from 'react';
import Header from './header/headerContainer';

const App = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
}

export default App;