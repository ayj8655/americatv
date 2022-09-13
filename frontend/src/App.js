import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';

function App(){
  return(
    
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>      
      </BrowserRouter>
      
   
  );
}

export default App;

