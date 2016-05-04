import React from "react";
import { IndexLink } from "react-router";
import { colors } from "../../style.js";

export default class Nav extends React.Component {

  render() {
    const brandStyle = {
      width: "100%",
      textAlign: "center",
      margin: "auto",
      color: colors.mainColor,
    };

    const logoStyle = {
      display: "inline-block",
      marginRight: "10px"
    };

    return (
      <nav class="navbar navbar-fixed-top navbar-light bg-faded">
        <IndexLink to="/" class="navbar-brand" style={brandStyle}><img src="./public/images/logo.svg" width="30" height="30" style={logoStyle}/><span class="main-color">ReactAct</span></IndexLink>
      </nav>
    );
  }
}
