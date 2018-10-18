import React, {Component} from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../UI/Navbar/Navbar';
import Footer from '../UI/Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import UserProfile from '../User/UserProfile';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {panelName:''}
    }
    render() {
        return (
            <div className="wrapper">
                <div className="sidebar" data-background-color="white" data-active-color="danger">
                    <Sidebar/>
                </div>
                <div className="main-panel">
                    <Navbar name={this.state.panelName}/>

                    <div id="content" className="content">
                        <Switch >
                            <Route exact path='/' render={(props)=>(<Dashboard {...props} panelName={this.panelName}/>)} />
                            <Route exact path='/user' render={(props)=>(<UserProfile {...props} panelName={this.panelName}/>)}/>
                        </Switch>

                    </div>
                    <Footer/>
                </div>
            </div>


        );
    }
    panelName = (name)=>{
        this.setState({ panelName: name });
    }

}
export default App;
