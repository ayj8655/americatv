import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/SignUp';
import MyPage_Template from './components/MyPage_Template';
import MyPage_Main from './components/MyPage_Main';
import './App.css';
import Agreement from './components/Agreement';

function App(){
  return(
    <div className='Wrapper'>
      <BrowserRouter>
          <Routes>
            <Route path='/main' element={<Main/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/agreement' element={<Agreement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/MyPage_Template' element={<MyPage_Template/>}></Route>
            <Route path='/MyPage_Main' element={<MyPage_Main/>}></Route>
          </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

