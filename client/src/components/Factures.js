import React, { Component } from "react";
import axios from "axios";
import LineFact from "./LineFact";
class Factures extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], isLoading: true };
  }
  componentDidMount() {
    axios
      .get("/payments")
      .then(res => {
        this.setState({ list: Array.from(res.data), isLoading: false });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>Table of factures</h1>
        <div className="table-responsive text-nowrap">
          <table
            id="dtMaterialDesignExample"
            className="table table-striped"
            cellSpacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th className="th-sm">
                  Client Name
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Adress
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Email
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Telephone
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  date
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Total Payment
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map(el => (
                <LineFact key={el._id} facture={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Factures;
