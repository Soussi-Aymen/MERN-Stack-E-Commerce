import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Factures from "./Factures";
class FacturePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Factures history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default FacturePage;
