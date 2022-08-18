import React from 'react';
import logo from './logo.svg';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from './components/Subject';
import Header from './components/Head';
import Login from './components/Login';
import './App.css';

function App(){
  return(
    <div className='Wrapper'>
      <Login></Login>
    </div>
  );
}

export default App;

