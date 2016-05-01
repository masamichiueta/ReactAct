import React from "react";
import { IndexLink } from "react-router";

export default class Nav extends React.Component {

  render() {
    const brandStyle = {
      width: "100%",
      textAlign: "center",
      margin: "auto"
    };
    return (
      <nav class="navbar navbar-fixed-top navbar-light bg-faded">
        <IndexLink to="/" class="navbar-brand" style={brandStyle}>ReactAct</IndexLink>
      </nav>
    );
  }
}
