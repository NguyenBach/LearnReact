import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/MainApp/App';
import Sidebar from './component/Sidebar/Sidebar'

ReactDOM.render(<App/>, document.getElementById('main-panel'));
ReactDOM.render(<Sidebar/>, document.getElementById('main-sidebar'));

