import "./Activity.scss";

import React from "react";

export default class Activity extends React.Component {

  render() {
    const { text, imageUrl } = this.props;
    const imageStyle = {
      width: "100%",
      height: "auto"
    };

    return (
      <div class="col-md-4">
        <a target="_blank" href={imageUrl}>
          <div class="card">
            <img class="card-img-top" style={imageStyle} src={imageUrl} alt="Card image cap" />
            <div class="card-block">
               <p class="card-text sample">{text}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
