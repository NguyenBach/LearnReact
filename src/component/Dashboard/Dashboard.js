import React, {Component} from 'react';
import Card from '../UI/Card/Card';
import CardFooter from '../UI/Card/CardFooter';
export default class Dashboard extends Component {
    getPanelName = ()=>{
        if(this.props.match != null){
            this.props.panelName('Dashboard');
        }
    };
    componentDidMount() {
        this.getPanelName();
    }
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Card>
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-warning text-center">
                                        <i className="ti-server"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Capacity</p>
                                        105GB
                                    </div>
                                </div>
                            </div>
                            <CardFooter icon="ti-reload" text="Updated now"/>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Card >
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-success text-center">
                                        <i className="ti-wallet"/>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Revenue</p>
                                        $1,345
                                    </div>
                                </div>
                            </div>
                            <CardFooter icon="ti-calendar" text="Last day"/>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Card >
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-danger text-center">
                                        <i className="ti-pulse"/>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Errors</p>
                                        23
                                    </div>
                                </div>
                            </div>
                            <CardFooter icon="ti-timer" text="In the last hour"/>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Card>
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-info text-center">
                                        <i className="ti-twitter-alt"/>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Followers</p>
                                        +45
                                    </div>
                                </div>
                            </div>
                            <CardFooter icon="ti-reload" text="Updated now"/>
                        </Card>
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Card title="Users Behavior" category="24 Hours performance">
                            <div id="chartHours" className="ct-chart"></div>
                            <CardFooter icon="ti-reload" text="Updated 3 minutes ago">
                                <div className="chart-legend">
                                    <i className="fa fa-circle text-info"/> Opens
                                    <i className="fa fa-circle text-danger"/> Click
                                    <i className="fa fa-circle text-warning"/> Click Second Time
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Card title="Email Statistics" category="Last Campaign Performance">
                            <div id="chartHours" className="ct-chart"></div>
                            <CardFooter icon="ti-timer" text="Campaign sent 2 days ago">
                                <div className="chart-legend">
                                    <i className="fa fa-circle text-info"/> Open
                                    <i className="fa fa-circle text-danger"/> Bounce
                                    <i className="fa fa-circle text-warning"/> Unsubscribe
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card title="2015 Sales" category="All products including Taxes">
                            <div id="chartHours" className="ct-chart"></div>
                            <CardFooter icon="ti-check" text="Data information certified">
                                <div className="chart-legend">
                                    <i className="fa fa-circle text-info"/> Tesla Model S
                                    <i className="fa fa-circle text-warning"/> BMW 5 Series
                                </div>
                            </CardFooter>
                        </Card>

                    </div>
                </div>
            </div>
        );
    }
}