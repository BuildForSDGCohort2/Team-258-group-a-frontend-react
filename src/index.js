import React from 'react';
import './App.css';
import './components/assets/styles/Styles.css';
import './components/assets/styles/Sidenav.css';
import './components/assets/styles/Theme.css';
import './components/assets/styles/Reset.css';
import './components/assets/styles/Normalize.css';
import './components/assets/styles/Animate.css';
import './components/assets/styles/Html5reset.css';
import Signin from './components/auth/Signin';
import MainRouter from './components/MainRouter';
import Sidenav from './components/core/Sidenav';
import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
  <BrowserRouter>
      <Sidenav />
      <Signin />
      <MainRouter/>
  </BrowserRouter>
)}

export default hot(module)(App)

