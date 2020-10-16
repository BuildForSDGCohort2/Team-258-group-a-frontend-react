import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signup from './user/Signup'
import ForgotPass from './user/ForgotPass'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Sidenav from './core/Sidenav';
import BureauInfo from './bureau/BureauInfo';
import JobSeekers from './bureau';
import Dashboard from './bureau/Dashboard';
import EditBureau from './bureau/EditBureau'


const MainRouter = () => {
    return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidenav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/forgot-pass" component={ForgotPass}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path='/bureau' component={BureauInfo} />
        <Route path='/jobseeker' component={JobSeekers} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/edit' component={EditBureau} />
      </Switch>
    </div>)
}

export default MainRouter
