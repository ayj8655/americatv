import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import MyPage_Template from './components/MyPage_Template';
import MyPage_Main from './components/MyPage_Main';
import './App.css';

function App(){
  return(
    <div className='Wrapper'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/MyPage_Template' element={<MyPage_Template/>}></Route>
            <Route path='/MyPage_Main' element={<MyPage_Main/>}></Route>
          </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

