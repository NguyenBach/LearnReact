import React, {Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';

export default class LiSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {active: ''};
    }
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    };
    render() {
        return (
            <li className={this.getNavLinkClass(this.props.url)}>
                <NavLink to={this.props.url}   >
                    <i className={this.props.icon}/>
                    <p>{this.props.name}</p>
                </NavLink>
            </li>

        );
    }
}
LiSidebar = withRouter(LiSidebar);