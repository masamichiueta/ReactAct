import React from "react";

export default class Activity extends React.Component {

  render() {
    const { title, imageUrl } = this.props;
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
              <h4 class="card-title">{title}</h4>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
