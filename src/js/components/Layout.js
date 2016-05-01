import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Masamichi",
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.name}/>
        <Footer />
      </div>
      // <div>
      //
      //   <Footer />
      // </div>
    );
  }
}
