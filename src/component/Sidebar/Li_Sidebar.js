import React,{Component} from 'react';

export default class Li_Sidebar extends Component{
    render(){
        return (
            <li className={this.props.active}>
                <a href= {this.props.href}>
                    <i className={this.props.icon}></i>
                    <p>{this.props.name}</p>
                </a>
            </li>
        );
    }
}