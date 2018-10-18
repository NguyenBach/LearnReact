import React,{Component} from 'react';

export default class CardFooter  extends Component{
    render() {
        return(
            <div className="footer">
                {this.props.children}
                <hr/>
                <div className="stats">
                    <i className={this.props.icon}/> {this.props.text}
                </div>
            </div>
        );
    }
}