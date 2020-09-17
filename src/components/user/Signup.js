import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import { create } from './api-user.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Link } from 'react-router-dom'
import Logo from './../assets/images/logo.png'
import Placeholder from './../assets/images/placeholder.png'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function Signup() {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, error: '', open: true })
      }
    })
  }

  
// const Main = () => {
//     const date = new Date(),
//     thisYear = date.getFullYear(),
//     copyrightYear = document.querySelector("#copyrightYear");
//     copyrightYear.textContent = thisYear; // Sets current year as text
// }

// Main();

  return (
    <div className="container">
      <div className="auth-container rounded w-100 h-100 mt-12vh">
        <div className="row">
          {/* left part STARTS */}
          <div className="d-none d-sm-none d-md-none d-lg-block col-lg-5 p-0">
            <div className="left-part">
              <div className="logo-area">
                <div className="row">
                  <div className="col-lg-8">
                    <img className="img-fluid ml-2 mt-1 float-left text-left align-top"
                      src={Logo} alt="Fumana logo" />
                  </div>
                  <div className="col-lg-4">
                    {/* We need this part to make it responsive */}
                    <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                  </div>
                </div>
              </div>
              <div className="place-holder-img justify-content-center align-content-center text-center">
                <img className="img-fluid" src={Placeholder} alt="Fumana" />
              </div>
            </div>
          </div>
          {/* right part STARTS */}
          <div className="col-12 col-md-12 col-lg-7 p-0">
            <div className="right-part">
              <div className="row">
                <div className="col-5 col-md-5">
                  {/* We need this part to make it responsive */}
                  <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="sign-up-area float-right mx-5 mx-md-3">
                    Have a Fumana account? &nbsp;<a
                      className="font-weight-bold color-primary font-size-normal text-decoration-none"
                      title="Login" href="signin">Log in here</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-1 col-md-3">
                  {/* We need this part to make it responsive */}
                  <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                </div>
                <div className="col-10 col-md-6">
                  <div className="pt-6vh input-field-container justify-content-center">
                    <div className="auth-title font-weight-bold">
                      <div className="color-gray">New to Fumana?</div>
                      <div className="font-weight-bold py-2 text-dark">Sign up here</div>
                    </div>

                    {
                      values.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {values.error}
                      </Typography>)
                    }
                    <Dialog open={values.open} disableBackdropClick={true}>
                      <DialogTitle>New Account</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          New account successfully created.
                    </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Link to="/signin">
                          <Button color="primary" autoFocus="autoFocus" variant="contained">
                            Sign In
                                                </Button>
                        </Link>
                      </DialogActions>
                    </Dialog>

                    <form>
                      <div className="form-group pt-3">
                        <label className="pb-2 color-gray font-weight-bold" for="inputName1">Full
                                                    name</label>
                        <input value={values.name} onChange={handleChange('name')} type="Name" className="form-control" id="inputName"
                          placeholder="Full name" name="name" />
                      </div>
                      <div className="form-group">
                        <label className="pb-2 color-gray font-weight-bold"
                          for="inputemail1">Email</label>
                        <input value={values.email} onChange={handleChange('email')} type="email" className="form-control" id="inputemail"
                          placeholder="Email" name="email" />
                      </div>
                      <div className="form-group">
                        <label className="pb-2 color-gray font-weight-bold"
                          for="inputPassword1">Password</label>
                        <input value={values.password} onChange={handleChange('password')} type="password" className="form-control" id="inputPassword1"
                          placeholder="Password" name="password" />
                      </div>
                      <div className="form-group">
                        <label className="pb-2 color-gray font-weight-bold"
                          for="inputPassword1">Repeat password</label>
                        <input value={values.password} onChange={handleChange('password')} type="password" className="form-control" id="inputRepeatPassword1"
                          placeholder="Repeat password" name="repeatpassword" />
                      </div>
                      <button onClick={clickSubmit} type="submit"
                        className="px-5 mt-4 btn btn-default bg-primary color-white font-weight-bold">Sign
                        up</button>
                    </form>
                  </div>
                  <div className="auth-ending mt-5">
                    <div className="d-inline">
                      <span>
                        <a className="color-primary text-decoration-none" title="Terms of service"
                          href="tos">Terms of service</a>
                      </span>
                      <span className="px-2">
                        |
                    </span>
                      <span>
                        <a className="color-primary text-decoration-none"
                          title="Privacy policy" href="privacy">Privacy
                                                    policy</a>
                      </span>
                    </div>
                    <div className="copyright-info color-gray my-2">
                      <small>Copyright &copy; <span id="copyrightYear"></span> Fumana. All
                                                rights reserved
                                            </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 col-md-3">
                {/* We need this part to make it responsive */}
                <div className="d-none d-sm-none d-md-none d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
