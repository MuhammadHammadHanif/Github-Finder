import React from 'react';

import './App.css';
import CombineContext from './context/CombineContext';
import Routes from './routing/Routes';

const App = () => {
  return (
    <CombineContext>
      <Routes />
    </CombineContext>
  );
};

export default App;
