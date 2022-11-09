import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import MyPage_Main from './components/MyPage_Main';
import Agreement from './components/Agreement';
import Slider from './components/exSlider'
import UserInfo from './components/userInfo';
import './App.css';

function App(){
  
  return(
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/agreement' element={<Agreement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/broadcast/:userid' element={<MyPage_Main/>}></Route>
            <Route path='/Slider' element={<Slider/>}></Route>
            <Route path='/userInfo' element={<UserInfo/>}></Route>
          </Routes>      
      </BrowserRouter>
  );
}

export default App;

