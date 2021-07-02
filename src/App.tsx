import React from 'react';
import { Home } from './pages/home';
import {GlobalStyle} from './styles/index'
import data from './data/data.json'

function App() {
  return (
    <>
   <GlobalStyle/>
      <Home data={data}/>
  </>
      );
}

export default App;
