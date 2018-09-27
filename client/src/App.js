import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import FacturePage from "./components/FacturePage";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/factures" component={FacturePage} />
          <Route exact path="/Products" component={ProductPage} />

          <Route exact path="/home" component={Home} />
          <Link to="/home">
            <button className="btn btn-success"> Access to Home</button>
          </Link>
        </div>
      </Router>
    );
  }
}

export default App;
