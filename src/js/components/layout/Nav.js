import "./Nav.scss";

import React from "react";
import { IndexLink } from "react-router";
import logo from "../../../images/logo.svg";
export default class Nav extends React.Component {

  render() {

    return (
      <nav class="navbar navbar-fixed-top navbar-light bg-faded">
        <IndexLink to="/" class="navbar-brand brand"><img src={logo} width="30" height="30" class="logo"/><span class="main-color">ReactAct</span></IndexLink>
      </nav>
    );
  }
}
