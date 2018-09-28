import React, { Component } from "react";
import EditModal from "./EditModal";
class TableLine extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.reference}</td>
        <td>{this.props.product.category}</td>
        <td>{this.props.product.price} DT</td>
        <td>{this.props.product.instock}</td>
        <td>{this.props.product.bought}</td>
        <td>{this.props.product.total}</td>
        <td>{this.props.product.date}</td>
        <td>
          <button
            className="btn btn-outline-success dc-panel-remove btn-sm"
            onClick={() => this.props.handleAdd(this.props.product._id)}
          >
            +
          </button>
        </td>
        <td>
          <button
            className="btn btn-outline-danger dc-panel-remove btn-sm"
            onClick={() => this.props.handleRemove(this.props.product._id)}
          >
            -
          </button>
        </td>
        <td>
          <button
            className="btn btn-outline-success dc-panel-remove btn-sm"
            onClick={() => this.props.handleAdd(this.props.product._id)}
            data-toggle="modal"
            data-target={`#central${this.props.product._id}`}
          >
            Edit
          </button>
        </td>
        <EditModal
          key={this.props._id}
          handleUpdate={this.props.handleUpdate}
          history={this.props.history}
          product={this.props.product}
        />
      </tr>
    );
  }
}

export default TableLine;
