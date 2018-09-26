import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init = () => {
    this.state = {
      price: 0,
      title: "",
      reference: "",
      image: "",
      category: "",
      total: 0,
      instock: 0,
      desc: ""
    };
  };
  handleChange = event => {
    this.setState({ instock: this.state.total });
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNew = () => {
    axios
      .post("/products/add_product", { ...this.state })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
    //<Redirect to="/home" />;
    this.props.history.push("/home");
  };
  render() {
    return (
      <div
        className="modal fade"
        id="centralModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title w-100" id="myModalLabel">
                Add New product
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row mb-4">
                <div className="col">
                  Product title
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Product Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-row mb-4">
                <div className="col">
                  Product reference
                  <input
                    type="text"
                    name="reference"
                    className="form-control"
                    placeholder="Product reference"
                    value={this.state.reference}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-row mb-4">
                <div className="col">
                  Price
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row mb-4">
                <div className="col">
                  Product quantity
                  <input
                    type="number"
                    name="total"
                    className="form-control"
                    placeholder="Product quantity"
                    value={this.state.total}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <input type="file" name="image" onChange={this.handleChange} />

              <div className="form-row mb-4">
                <div className="col">
                  <label>Category: </label>
                  <select
                    className="mdb-select md-form colorful-select dropdown-primary"
                    name="category"
                    onChange={this.handleChange}
                  >
                    <option value="1">PC's</option>
                    <option value="2">Games</option>
                    <option value="3">Phones</option>
                    <option value="4">Clothes</option>
                    <option value="5">Houses</option>
                  </select>
                </div>
              </div>
              <div className="md-form">
                <textarea
                  type="text"
                  name="desc"
                  className="md-textarea form-control"
                  rows="3"
                  onChange={this.handleChange}
                />
                <label>Product discription</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-dismiss="modal"
                onClick={this.handleNew}
                data-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
