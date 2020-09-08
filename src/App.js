import React from 'react';
import './App.css';
import './Styles.css';
import './Theme.css';
import './Reset.css';
import './Normalize.css';
import './Animate.min.css';
import './Html5reset.css';
import Signin from './components/auth/Signin';
import MainRouter from './components/MainRouter'
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
      <Signin />
      <MainRouter/>
  </BrowserRouter>
)}

export default hot(module)(App)

