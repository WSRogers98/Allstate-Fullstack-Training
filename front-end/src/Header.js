import React, { PureComponent } from "react";
import "./Header.css";
import logo from "./image.png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends PureComponent {
  render() {
    
    return (
      <header className="component-header">
       <img src={logo} alt="logo"
          width="400"
          height="300"
          alt=""
        />
      </header>
    );
  }
}