import React, { Component } from "react";

class Sidenav extends Component {
  render() {
    return (

        <nav id="sidebar" className="active">
          <ul className="list-unstyled components mb-5">
            <div className="text-center mb-2">
              <li
                id="sidebarCollapse"
                className="nav-bars mt-4 ml-auto pl-auto font-size-large"
              ></li>
            </div>
            <li className="active color_light__accessibility">
              <a href="/dashboard">
                <span className="fa fa-dashboard"></span> Dashboard
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="/bureau">
                <span className="fa fa-briefcase"></span> Bureau
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="/user">
              <a href="#">
                <span className="fa fa-user"></span> User
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="/employer">
                <span className="fa fa-user"></span> Employer
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="jobseeker">
                <span className="fa fa-users"></span> Job seeker
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="/settings">
                <span className="fa fa-cogs"></span> Settings
              </a>
            </li>
            <li className="color_light__accessibility">
              <a href="/legal">
                <span className="fa fa-paper-plane"></span> Legal
              </a>
            </li>
          </ul>

          <div className="footer">
            <p>Copyright &copy; 2020 Fumana</p>
          </div>
        </nav>




    );
  }
}

export default Sidenav;
