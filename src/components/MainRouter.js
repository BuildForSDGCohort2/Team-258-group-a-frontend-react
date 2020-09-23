import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Sidenav from './core/Sidenav';
import BureauInfo from './bureau';
import JobSeekers from './bureau';
import Dashboard from './bureau'

const MainRouter = () => {
    return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidenav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path='/bureau' component={BureauInfo} />
        <Route path='/jobseeker' component={JobSeekers} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>)
}

export default MainRouter
