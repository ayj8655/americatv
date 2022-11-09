import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import MyPage_Main from './components/MyPage_Main';
import MyPage_BoardWrite from './components/MyPage_BoardWrite';
import MyPage_InfoSetting from './components/MyPage_InfoSetting';
import MyPage_Template from './components/MyPage_Template';
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
            <Route path='/MyPage_Template' element={<MyPage_Template/>}></Route>
            <Route path='/broadcast/:userid/MyPage_BoardWrite' element={<MyPage_BoardWrite/>}></Route>
            <Route path='/broadcast/:userid/MyPage_InfoSetting' element={<MyPage_InfoSetting/>}></Route>
            <Route path='/Slider' element={<Slider/>}></Route>
            <Route path='/userInfo' element={<UserInfo/>}></Route>
          </Routes>      
      </BrowserRouter>
  );
}

export default App;

