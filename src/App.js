import React,{useEffect} from 'react';
import './App.css';
import './components/assets/styles/Styles.css';
import './components/assets/styles/Sidenav.css';
import './components/assets/styles/Theme.css';
import './components/assets/styles/Reset.css';
import './components/assets/styles/Normalize.css';
import './components/assets/styles/Animate.css';
import './components/assets/styles/Html5reset.css';
import MainRouter from './components/MainRouter';

import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'

const App = () => {

  return (
  <BrowserRouter>
      <MainRouter/>
  </BrowserRouter>
)}

export default hot(module)(App)

