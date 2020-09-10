import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDashboard, faBriefcase, faUser, faUsers, faCogs, faLegal } from '@fortawesome/freesolid-svg-icons';

class Sidenav extends Component {
    render() {
        const FaDashboard = <FontAwesome icon={["fal", "dashboard"]} />,
            FaBriefcase = <FontAwesome icon={["fal", "briefcase"]} /> ,
            FaUser = <FontAwesome icon={["fal", "user"]} />,
            FaUsers = <FontAwesome icon={["fal", "users"]} />,
            FaCogs = <FontAwesome icon={["fal", "cogs"]} />,
            FaLegal = <FontAwesome icon={["fal", "legal"]} />;
        return (
            <div className="wrapper d-flex align-items-stretch">
                <nav id="sidebar" className="active">
                    <ul className="list-unstyled components mb-5">
                        <div className="text-center mb-2">
                            <li id="sidebarCollapse" className="nav-bars mt-4 ml-auto pl-auto font-size-large"></li>
                        </div>
                        <li className="active color_light__accessibility">
                            <a href="#">{FaDashboard} Dashboard</a>
                        </li>
                        <li className="color_light__accessibility">
                            <a href="#">{FaBriefcase} Bureau</a>
                        </li>
                        <li className="color_light__accessibility">
                            <a href="#">{FaUser} User</a>
                        </li>
                        <li className="color_light__accessibility">
                            <a href="#">{FaUser} Employer</a>
                        </li>
                        <li className="color_light__accessibility">
                            <a href="#">{faUsers} Job seeker</a>
                        </li>
                        <li className="color_light__accessibility">
                            <a href="#">{faCogs} Settings</a>
                        </li>
                        <li className="color_light__accessibility">
                            <a href="#">{faLegal} Legal</a>
                        </li>
                    </ul>

                    <div className="footer">
                        <p>
                            Copyright &copy; 2020 Fumana
                        </p>
                    </div>
                </nav>
                {/* Contents goes here */}
                <h2 class="mb-4">Team 258 Group A</h2>
            </div>
        )
    }
}

export default Sidenav;
