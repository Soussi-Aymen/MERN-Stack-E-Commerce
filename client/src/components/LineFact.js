import React, { Component } from "react";
class LineFact extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.facture.name}</td>
        <td>{this.props.facture.adress}</td>
        <td>{this.props.facture.email}</td>
        <td>{this.props.facture.telephone}</td>
        <td>{this.props.facture.date}</td>
        <td>{this.props.facture.paymentTotal}</td>
      </tr>
    );
  }
}

export default LineFact;
