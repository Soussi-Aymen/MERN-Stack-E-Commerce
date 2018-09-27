import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chart from "./Chart";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Chart />
        <Footer />
      </div>
    );
  }
}

export default Home;
