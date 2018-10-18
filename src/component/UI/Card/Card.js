 import React,{Component} from 'react';
import CardFooter from './CardFooter';
export default class Card extends Component{
    render() {
        return(
            <div className="card">
                <div className="header">
                    <h4 className="title">{this.props.title}</h4>
                    <p className="category">{this.props.category}</p>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}