import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import MyPage_Main from './components/MyPage_Main';
import Agreement from './components/Agreement';
import './App.css';

function App(){
  return(
    
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/agreement' element={<Agreement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/MyPage_Main' element={<MyPage_Main/>}></Route>
          </Routes>      
      </BrowserRouter>
      
   
  );
}

export default App;

