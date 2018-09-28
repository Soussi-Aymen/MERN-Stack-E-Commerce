import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.product.price,
      title: this.props.product.title,
      reference: this.props.product.reference,
      image: this.props.product.image,
      category: this.props.product.category,
      total: this.props.product.total,
      instock: this.props.product.instock,
      desc: this.props.product.desc
    };
  }

  handleChange = event => {
    this.setState({ instock: this.state.total });
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleNew = () => {
    axios
      .put(`/products/modify_product/${this.props.product._id}`, {
        image: this.state.image,
        total: this.state.total,
        instock: this.state.instock,
        desc: this.state.desc,
        price: this.state.price
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    this.props.handleUpdate();

    //<Redirect to="/home" />;
  };
  render() {
    return (
      <div
        className="modal fade"
        id={`central${this.props.product._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title w-100" id="myModalLabel">
                Edit product
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
                    value={this.state.title}
                    onChange={this.handleChange}
                    readOnly={true}
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
                    readOnly={true}
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

              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />

              <div className="md-form">
                <textarea
                  type="text"
                  name="desc"
                  className="md-textarea form-control"
                  rows="3"
                  value={this.state.desc}
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
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
