import React, { Component } from 'react';

class ForgotPass extends Component {
    render() {
        return (
            <div className="container">
            <div className="auth-container rounded w-100 h-100 mt-12vh">
                <div className="row">
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-3 p-0">
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 p-0">
                        <div className="main-part">
                            <div className="row">
                                <div className="col-1 col-md-3">
                                    <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                                </div>
                                <div className="col-10 col-md-7 mt-0 pt-0 pt-lg-2">
                                    <div className="pt-4vh input-field-container justify-content-center">
                                        <div className="auth-title font-weight-bold">
                                            <div className="my-2 color-secondary text-center font-size-large">Fumana</div>
                                        </div>
                                        <div className="descriptor">
                                            <div className="my-4 heading font-weight-bold text-center">
                                                Forgot your password?
                                            </div>
                                            <div className="my-2 subheading font-size-small text-center font-size-small">
                                                Don't worry! Resetting your password is easy. Just type in the email you
                                                registered to Fumana.
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group pt-8vh">
                                                <label className="pb-1 pb-lg-2 color-gray font-weight-bold"
                                                    for="inputemail1">Email</label>
                                                <input type="email" className="form-control" id="inputemail"
                                                    placeholder="Enter your email address" name="email" />
                                            </div>
                                            <button type="submit"
                                                className="w-100 mt-1 mb-4 mt-lg-3 mb-lg-5 btn btn-default bg-primary color-white
                                                font-weight-bold">SEND</button>
                                        </form>
                                    </div>
                                    <div className="login-trouble text-center font-size-smaller d-inline">
                                        Did you remember your password?
                                        <a href="login.html" className="color-primary"
                                            title="Trouble logging in?">Try logging in</a>
                                    </div>
                                </div>
                                <div className="col-1 col-md-3">
                                    <div className="d-none d-sm-none d-md-none d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-3 p-0">
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ForgotPass;