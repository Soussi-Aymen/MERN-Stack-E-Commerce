import React, { Component } from "react";
class TableLine extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.reference}</td>
        <td>{this.props.product.category}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.instock}</td>
        <td>{this.props.product.bought}</td>
        <td>{this.props.product.total}</td>
        <td>{this.props.product.dateofadd}</td>
        <td>
          <button
            className="btn btn-outline-success dc-panel-remove btn-sm"
            onClick={() => this.props.handleAdd(this.props.product.id)}
          >
            +
          </button>
        </td>
        <td>
          <button
            className="btn btn-outline-danger dc-panel-remove btn-sm"
            onClick={() => this.props.handleRemove(this.props.product.id)}
          >
            -
          </button>
        </td>
      </tr>
    );
  }
}

export default TableLine;
