import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import MainDashboard from './component/MainDashboard/MainDashboard'

class App extends Component {
    componentDidMount() {
        document.title = "Paper Dashboard"

    }

    render() {
        return (
            <MainDashboard>

            </MainDashboard>
        );
    }
}

export default App;
