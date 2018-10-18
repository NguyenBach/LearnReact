import React, {Component} from 'react';
import Card from '../UI/Card/Card';
import UserActionBar from './UserActionBar'

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {actionBar:'none'}
    }
    getPanelName = ()=>{
        if(this.props.match != null){
            this.props.panelName('User');
        }
    };
    componentDidMount() {
        this.getPanelName();
    }
    hoverStart = (event) =>{
        this.setState({actionBar: true})
    };
    hoverEnd = (event) => {
        this.setState({actionBar: false})
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Card title="Users" category="Infomation of all users">
                            <div className="content table-responsive table-full-width">
                                <table className="table table-striped">
                                    <thead>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Posts</th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className="username" onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
                                            <img src="assets/img/tim_80x80.png" alt=""/>
                                            <strong>Dakota Rice</strong><br/>
                                            <UserActionBar display={this.state.actionBar ? "inline" : "none"}/>
                                        </td>
                                        <td>$36,738</td>
                                        <td>Niger</td>
                                        <td>Oud-Turnhout</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="username" onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
                                            <img src="assets/img/tim_80x80.png" alt=""/>
                                            <strong>Dakota Rice</strong><br/>
                                            <UserActionBar display={this.state.actionBar ? "inline" : "none"}/>
                                        </td>                                        <td>$23,789</td>
                                        <td>Curaçao</td>
                                        <td>Sinaai-Waas</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="username" onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
                                            <img src="assets/img/tim_80x80.png" alt=""/>
                                            <strong>Dakota Rice</strong><br/>
                                            <UserActionBar display={this.state.actionBar ? "inline" : "none"}/>
                                        </td>                                        <td>$56,142</td>
                                        <td>Netherlands</td>
                                        <td>Baileux</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className="username" onMouseEnter={this.hoverStart} onMouseLeave={this.hoverEnd}>
                                            <img src="assets/img/tim_80x80.png" alt=""/>
                                            <strong>Dakota Rice</strong><br/>
                                            <UserActionBar display={this.state.actionBar ? "inline" : "none"}/>
                                        </td>                                        <td>$38,735</td>
                                        <td>Korea, South</td>
                                        <td>Overland Park</td>
                                        <td>20</td>
                                    </tr>

                                    </tbody>
                                </table>

                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}