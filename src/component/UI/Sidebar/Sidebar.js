import React, {Component} from 'react';
import LiSidebar from './LiSidebar';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text">
                        Creative Tim
                    </a>
                </div>

                <ul className="nav">
                    <LiSidebar active="" name="Dashboard" url="/" icon="ti-panel"/>
                    <LiSidebar active="" name="User" url="/user" icon="ti-user"/>
                </ul>
            </div>
        );
    }
}