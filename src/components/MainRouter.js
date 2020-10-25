import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import ForgotPass from './user/ForgotPass'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Sidenav from './core/Sidenav';
import BureauInfo from './bureau/BureauInfo';
import JobSeekers from './bureau';
import Dashboard from './bureau/Dashboard';
import EditBureau from './bureau/EditBureau';
import NotFound from './core/NotFound';


const MainRouter = () => {
    return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidenav/>
      <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/forgot-pass" component={ForgotPass}/>
      <Route component={NotFound}/>
      <Switch>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path='/bureau' component={BureauInfo} />
        <Route path='/jobseeker' component={JobSeekers} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/edit' component={EditBureau} />
      </Switch>
      </Router>
    </div>)
}

export default MainRouter
