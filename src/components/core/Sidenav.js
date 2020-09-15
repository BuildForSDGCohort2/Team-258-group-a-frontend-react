import React, { Component } from "react";
import Home from "./Home";
class Sidenav extends Component {
  render() {
    return (
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className="active">
          <ul className="list-unstyled components mb-5">
            <div className="text-center mb-2">
              <li
                id="sidebarCollapse"
                className="nav-bars mt-4 ml-auto pl-auto font-size-large"
              ></li>
            </div>
            <li className="active color_light__accessibility">
              <a href="#">
                <span className="fa fa-dashboard"></span> Dashboard
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="#">
                <span className="fa fa-briefcase"></span> Bureau
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="#">
                <span className="fa fa-user"></span> User
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="#">
                <span className="fa fa-user"></span> Employer
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="#">
                <span className="fa fa-users"></span> Job seeker
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="#">
                <span className="fa fa-cogs"></span> Settings
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="#">
                <span className="fa fa-paper-plane"></span> Legal
              </a>
            </li>
          </ul>

          <div className="footer">
            <p>Copyright &copy; 2020 Fumana</p>
          </div>
        </nav>
        {/* Page Content  */}
        <div id="content" className="p-4 p-md-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Bureau
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      User
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Job seeker
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Legal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Content goes here */}
          <h2 className="mb-4">Team 258 Group A</h2>
          <Home />
        </div>
      </div>
    );
  }
}

export default Sidenav;
