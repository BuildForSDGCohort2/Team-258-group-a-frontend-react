import React, { Component } from 'react';
import Logo from './../assets/images/logo/logo.png'

class Home extends Component {
  render() {
    const bgStyle = {
      backgroundImage: "url('/src/components/assets/images/bg/bg-hero.jpg')",
    };
    return (
      <section className="container" id="container">
        <div className="row mt-4 pt-3 intro">
          <div className="col-md-3">
            <div className="justify-content-start float-left">
              <a href="index" className="brand navbar-brand">
                <img src={Logo} alt="Fumana logo" className="img-fluid brand-logo" />
              </a>
            </div>
          </div>
          <div className="col-md-9 nav-links-area">
            <div className="justify-content-end float-right">
              <ul className="nav-links justify-content-between list-unstyled">
                <a href="/signin" className="text-decoration-none color-black">
                  <li className="nav-link nav-item sign-in d-inline bg-hover px-4">Sign In</li>
                </a>
                <a href="/signup" className="text-decoration-none">
                  <li className="nav-link nav-item sign-up d-inline bg-tertiary color-white px-4">Sign Up
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 offset-3 pt-3 text-center">
            <div className="hero-text">
              <h1 className="heading fz-38 font-weight-bold my-3">We Help Land You A Job Here</h1>
              <p className="desc fz-24 my-4">Fumana helps small NGO bureaus link job seekers and potential employers</p>
            </div>
            <div className="action-buttons mt-5 pt-5">
              <a href="/signup" className="text-decoration-none">
                <span className="bg-tertiary color-white action-buttons-link hire bordered-radius-8">I'm Hiring</span>
              </a>
              <a href="/signup" className="text-decoration-none">
                <span className="color-tertiary ml-4 action-buttons-link work bordered-radius-8">I'm Working</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0 m-0">
            <div style={bgStyle} className="hero-img"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
