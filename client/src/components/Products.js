import React, { Component } from "react";
import TableLine from "./TableLine";
import Modal from "./Modal";
import axios from "axios";
/*const productlist = [
  {
    id: 1,
    price: 1569,
    title: "ASUS",
    image:
      "https://tn.jumia.is/o9LqJdffmQL3AXNGv8mH1gjnk8Q=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/99/438/1.jpg",

    desc: "ASUS PC Portable X541SA-XX252 - Rouge - Garantie 1 An",
    category: "pcs",
    reference: "jsj562",
    instock: 23,
    bought: 2,
    total: 25,
    dateofadd: "25 / 07 / 2018"
  },
  {
    id: 2,
    image:
      "https://tn.jumia.is/5gSGYNUenbaqi__OKrUNihZCd_I=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/64/352/1.jpg",
    title: "PlayStation 4 pro",
    desc: "PlayStation 4 pro - 1 TB + FIFA 2018 - Noir",
    price: 1799,
    category: "games",

    reference: "sfgz59",
    instock: 10,
    bought: 20,
    total: 30,
    dateofadd: "22 / 06 / 2018"
  }
];*/
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

  handleRemove = id => {
    this.setState({
      productlist: this.state.productlist.map(el => {
        if (el.id === id) {
          if (el.total === el.bought) {
            return el;
          } else {
            el.instock--;
            el.total--;
            return el;
          }
        }
        return el;
      })
    });
  };
  handleAdd = id => {
    this.setState({
      productlist: this.state.productlist.map(el => {
        if (el.id === id) {
          el.instock++;
          el.total++;
          return el;
        }
        return el;
      })
    });
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
        <Modal history={this.props.history} />
      </div>
    );
  }
}

export default Products;
