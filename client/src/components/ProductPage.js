import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Products from "./Products";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Products history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default Home;
