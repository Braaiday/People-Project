
import './App.css';

import React from "react";

import {Home} from './Home';
import {People} from './People';
import {Navigation} from './Navigation';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom' ;

function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <h3 className="m-3 d-flex justify-conent-center">
          React JS Crud App
        </h3>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/people' element={<People />} exact/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
