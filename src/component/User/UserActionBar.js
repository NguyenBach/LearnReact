import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class UserActionBar extends Component {

    render() {
        const style = {
            display: this.props.display

        };
        const color ={
            color: "red"
        };
        return (
            <div className="user-action" style={style}>
                <ul>
                    <li><Link to="#">View</Link></li>
                    <li><Link to="#">Edit</Link></li>
                    <li><Link to="#" style={color}>Delete</Link></li>
                </ul>
            </div>
        );
    }
}