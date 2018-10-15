import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Dashboard from '../Dashboard/Dashboard'

class App extends Component {
    componentDidMount() {
        document.title = "Paper Dashboard"

    }

    render() {
        return (
            <Dashboard>

            </Dashboard>
        );
    }
}

export default App;
