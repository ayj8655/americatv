import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import MyPage_Main from './components/MyPage_Main';
import MyPage_InfoSetting from './components/MyPage_InfoSetting';
import MyPage_Template from './components/MyPage_Template';
import Agreement from './components/Agreement';
import './App.css';

function App(){
  const [isLogin, setIsLogin] = useState(false);

useEffect(() => {
    if(localStorage.getItem('userId') === null){
        console.log('App js not Login');
        console.log(isLogin);
    }else{
      setIsLogin(true);
      console.log('App js Login!');
      console.log(isLogin);
    }
},[])

  return(
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main isLogin={isLogin}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/agreement' element={<Agreement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/MyPage_Main' element={<MyPage_Main/>}></Route>
            <Route path='/MyPage_Template' element={<MyPage_Template/>}></Route>
            <Route path='/MyPage_InfoSetting' element={<MyPage_InfoSetting/>}></Route>
          </Routes>      
      </BrowserRouter>
      
   
  );
}

export default App;

