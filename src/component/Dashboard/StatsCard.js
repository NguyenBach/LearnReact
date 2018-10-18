import React, {Component} from 'react';

export default class StatsCard extends Component{
    render(){
        return(
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big icon-info text-center">
                                <i className={this.props.icon}></i>
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>Followers</p>
                                +45
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <hr/>
                        <div className="stats">
                            <i className="ti-reload"></i> Updated now
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}