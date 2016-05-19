import "./Nav.scss";

import React from "react";
import { IndexLink } from "react-router";
import logo from "../../../images/logo.svg";
export default class Nav extends React.Component {

  render() {

    const logoPath = `public/${logo}`;

    return (
      <nav class="navbar navbar-fixed-top navbar-light bg-faded">
        <IndexLink to="/" class="navbar-brand brand"><img src={logoPath} height="30" class="logo"/></IndexLink>
      </nav>
    );
  }
}
