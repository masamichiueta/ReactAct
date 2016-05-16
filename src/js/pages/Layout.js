import "./Layout.scss";

import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              {this.props.children}

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
