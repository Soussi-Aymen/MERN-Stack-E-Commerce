import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small indigo lighten-1">
        <div className="footer-copyright text-center py-3">
          <a href="">
            {" "}
            © 2018 Copyright. Developed by Aymen Soussi Mohamed El Hani &&
            Mohamed Taieb Bousoffara .
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
