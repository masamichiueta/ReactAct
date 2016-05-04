import "./Activity.scss";

import React from "react";
import { colors } from "../style.js";

export default class Activity extends React.Component {

  render() {
    const { text, imageUrl, inverted } = this.props;
    const imageStyle = {
      width: "100%",
      height: "auto"
    };

    return (
      <li class={inverted ? "timeline-inverted" : ""}>
        <div class="timeline-badge">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <a target="_blank" href={imageUrl}>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">{text}</h4>
              <p><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> 11 hours ago via Instagram</small></p>
            </div>
            <div class="timeline-body">
              <img src={imageUrl} style={imageStyle} alt="Card image cap" />
            </div>
          </div>
        </a>
      </li>
    );
  }
}
