import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Edit from './component/edit';
import Home from './component/home';
import Create from './component/create';

function App() {
  return (
    <div className="App">
      <h3 className='header'>crud app</h3>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element= { <Home />} />
          <Route path = '/create' element= { <Create />} />
          <Route path = '/edit' element= { <Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;