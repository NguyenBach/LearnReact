import React,{Component} from 'react';
import Li_Sidebar from './Li_Sidebar'

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
                    <Li_Sidebar active="active" href="dashboard.html" icon="ti-panel" name="Dashboard" />
                    <Li_Sidebar active="" href="user.html" icon="ti-user" name="User"/>
                </ul>
            </div>
        );
    }
}