import React, {Component} from 'react';
import Navbar from '../UI/Navbar/Navbar';
import StatsCard from './StatsCard';

export default class MainDashboard extends Component{
    render(){
        return(
            <Navbar name="Dashboard"></Navbar>
        );
    }
}