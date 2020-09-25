import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar'
import BottomNavbar from './Components/BottomNavbar'
import DropImage from './Components/DropImage'
import Login from './Components/login'
import ThemeProvider from './ThemeProvider'

ReactDOM.render(
    <>
      <ThemeProvider>
        <Login />
      </ThemeProvider>
    </>
  ,
  document.getElementById('root')
);
