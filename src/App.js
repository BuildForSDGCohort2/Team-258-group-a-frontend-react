import React from 'react';
import './App.css';
import './Styles.css';
import './Sidenav.css';
import './Theme.css';
import './Reset.css';
import './Normalize.css';
import './Animate.min.css';
import './Html5reset.css';
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

