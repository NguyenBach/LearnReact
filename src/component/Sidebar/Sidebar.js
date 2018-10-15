import React,{Component} from 'react';

export default class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text">
                        Creative Tim
                    </a>
                </div>

                <ul className="nav">
                    <li className="active">
                        <a href="dashboard.html">
                            <i className="ti-panel"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li>
                        <a href="user.html">
                            <i className="ti-user"></i>
                            <p>User Profile</p>
                        </a>
                    </li>
                    <li>
                        <a href="table.html">
                            <i className="ti-view-list-alt"></i>
                            <p>Table List</p>
                        </a>
                    </li>
                    <li>
                        <a href="typography.html">
                            <i className="ti-text"></i>
                            <p>Typography</p>
                        </a>
                    </li>
                    <li>
                        <a href="icons.html">
                            <i className="ti-pencil-alt2"></i>
                            <p>Icons</p>
                        </a>
                    </li>
                    <li>
                        <a href="maps.html">
                            <i className="ti-map"></i>
                            <p>Maps</p>
                        </a>
                    </li>
                    <li>
                        <a href="notifications.html">
                            <i className="ti-bell"></i>
                            <p>Notifications</p>
                        </a>
                    </li>
                    <li className="active-pro">
                        <a href="upgrade.html">
                            <i className="ti-export"></i>
                            <p>Upgrade to PRO</p>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}