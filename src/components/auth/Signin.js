import React from 'react';
import auth from './../auth/auth-helper'
import { Redirect } from 'react-router-dom'
import { signin } from './api-auth.js'
<<<<<<< HEAD
import Logo from './../assets/images/logo/logo.png'
=======
import Logo from './../assets/images/logo.png'
>>>>>>> 225f12b2edda8ea4a30562f7eca469f03dd28192
import Placeholder from './../assets/images/placeholder.png'


export default Signin;

function Signin(props) {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  })

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, error: '', redirectToReferrer: true })
        })
      }
    })
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const { from } = props.location.state || {
    from: {
      pathname: '/'
    }
  }
  const { redirectToReferrer } = values
  if (redirectToReferrer) {
    return (<Redirect to={from} />)
  }


  // const Main = () => {
  //   const date = new Date(),
  //     thisYear = date.getFullYear(),
  //     copyrightYear = document.querySelector("#copyrightYear");
  //   copyrightYear.textContent = thisYear; // Sets current year as text
  // }

  // Main();

  return (
      <div className="container">
<<<<<<< HEAD
        <div className="auth-container rounded w-100 h-100 mt-8vh">
=======
        <div className="auth-container rounded w-100 h-100 mt-12vh">
>>>>>>> 225f12b2edda8ea4a30562f7eca469f03dd28192
          <div className="row">
            {/* left part STARTS */}
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-5 p-0">
              <div className="left-part">
                <div className="logo-area">
                  <div className="row">
                    <div className="col-lg-8">
<<<<<<< HEAD
                      <img className="img-fluid ml-2 mt-1 float-left text-left align-top logo-img"
=======
                      <img className="img-fluid ml-2 mt-1 float-left text-left align-top"
>>>>>>> 225f12b2edda8ea4a30562f7eca469f03dd28192
                        src={Logo} alt="Fumana logo" />
                    </div>
                    <div className="col-lg-4">
                      {/* We need this part to make it responsive */}
                      <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                    </div>
                  </div>
                </div>
                <div className="place-holder-img justify-content-center align-content-center text-center">
<<<<<<< HEAD
                  <img className="img-fluid placeholder-img" src={Placeholder} alt="Fumana" />
=======
                  <img className="img-fluid" src={Placeholder} alt="Fumana" />
>>>>>>> 225f12b2edda8ea4a30562f7eca469f03dd28192
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
                      To join Fumana? &nbsp;<a
                        className="font-weight-bold color-primary font-size-normal text-decoration-none"
                        title="Sign up" href="signup">Sign Up here</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 col-md-3">
                    {/* We need this part to make it responsive */}
                    <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                  </div>
                  <div className="col-10 col-md-6">
                    <div className="pt-8vh input-field-container justify-content-center">
                      <div className="auth-title font-weight-bold">
                        <div className="color-gray">Already have an account?</div>
                        <div className="font-weight-bold py-2 text-dark">Sign in here</div>
                      </div>
                      <form>
                        <div className="form-group pt-3">
                          <label className="pb-2 color-gray font-weight-bold"
                            for="inputemail1">Email</label>
                          <input id="email" type="email" label="Email" value={values.email}
                            onChange={handleChange('email')} className="form-control"
                            placeholder="Enter your email address" name="email" />
                        </div>
                        <div className="form-group">
                          <label className="pb-2 color-gray font-weight-bold"
                            for="inputPassword1">Password</label>
                          <input type="password" className="form-control"
                            placeholder="Password" name="password" id="password" type="password"
                            label="Password" value={values.password} onChange={handleChange('password')} />
                        </div>
                        <div className="checkbox">
                          <label className="color-gray font-weight-bold">
                            <input type="checkbox" name="checkbox" /> Stay logged in
                                                </label>
                        </div>
                        {/* <div className="font-weight-bold">
                                                        {values.error && (error)}
                                                    {values.error}
                                            </div>
                                            */}
                        <button onClick={clickSubmit} type="submit"
                          className="px-5 mt-5 btn btn-default bg-primary color-white font-weight-bold">Log
                                                in</button>
                      </form>
                    </div>
                    <div className="login-trouble my-4">
                      <a href="forgot-pass" className="text-decoration-none color-primary"
                        title="Trouble logging in?"> Can't access your account?</a>
                    </div>
                    <div className="auth-ending mt-2">
                      <div className="d-inline">
                        <span>
                          <a className="color-primary text-decoration-none" title="Contact us"
                            href="contact">Contact
                                                    us</a>
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
                  <div className="col-1 col-md-3">
                    {/* We need this part to make it responsive */}
                    <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
