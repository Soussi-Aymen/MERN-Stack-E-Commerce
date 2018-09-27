import React, { Component } from "react";
import TableLine from "./TableLine";
import Modal from "./Modal";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { productlist: [], isLoading: true };
  }
  componentDidMount() {
    axios
      .get("/products")
      .then(res => {
        this.setState({ productlist: Array.from(res.data), isLoading: false });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  handleUpdate = () => {
    axios
      .get("/products")
      .then(res => {
        this.setState({ productlist: Array.from(res.data), isLoading: false });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };
  handleRemove = id => {
    this.state.productlist.map(el => {
      if (el._id === id) {
        if (el.total !== el.bought) {
          axios
            .put(`/products/modify_product/${id}`, {
              instock: el.instock - 1,
              total: el.total - 1
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        }
      }
    });
    axios
      .get("/products")
      .then(res => {
        this.setState({ productlist: Array.from(res.data), isLoading: false });
        console.log(this.state);
      })
      .catch(err => console.log(err));

    <Redirect to="/home" />;
  };

  handleAdd = id => {
    this.state.productlist.map(el => {
      if (el._id === id) {
        axios
          .put(`products/modify_product/${id}`, {
            instock: el.instock + 1,
            total: el.total + 1
          })
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
      }
    });
    <Redirect to="/home" />;
    axios
      .get("/products")
      .then(res => {
        this.setState({ productlist: Array.from(res.data), isLoading: false });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid">
        <h1>This table contain all informations about your products</h1>
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
                  Name
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Reference
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Category
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Price
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  In stock
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Bought
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Total
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Date of add
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Add
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
                <th className="th-sm">
                  Remove
                  <i className="fa fa-sort float-right" aria-hidden="true" />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.productlist.map(el => (
                <TableLine
                  key={el._id}
                  product={el}
                  handleRemove={this.handleRemove}
                  handleAdd={this.handleAdd}
                />
              ))}
            </tbody>
          </table>
        </div>
        <button
          type="button"
          className="btn btn-success btn-sm "
          data-toggle="modal"
          data-target="#centralModal"
        >
          Add new product
        </button>
        <Modal handleUpdate={this.handleUpdate} history={this.props.history} />
      </div>
    );
  }
}

export default Products;
