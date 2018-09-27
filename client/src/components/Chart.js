import React, { Component } from "react";
import axios from "axios";
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], isLoading: true, money: 0 };
  }
  componentDidMount() {
    axios
      .get("/payments")
      .then(res => {
        this.setState({ list: Array.from(res.data), isLoading: false });
        console.log(this.state.list);
      })
      .catch(err => console.log(err));
  }
  calculateMoney = () => {
    let x = this.state.list.reduce((total, el) => el.paymentTotal + total);
    this.setState({ money: x });
    console.log(x);
  };
  render() {
    return (
      /*<div className="col-md-6 col-xl-3 mb-r">
            <div className="card cascading-admin-card">
            <div className="admin-up">
                <i className="fa fa-money primary-color" />
                <div className="data">
                <p>SALES</p>
                <h4>
                    <strong>{this.calculateMoney ;this.state.money}</strong>
                </h4>
                </div>
            </div>
            <div className="card-body">
                <div className="progress">
                <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="25"
                    className="progress-bar bg-primary width"
                    role="progressbar"
                />
                </div>
                <p className="card-text">Better than last week (25%)</p>
            </div>
            </div>
        </div>*/
      <div />
    );
  }
}

export default Chart;
