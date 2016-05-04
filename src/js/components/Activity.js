import React from "react";
import { colors } from "../style.js";

export default class Activity extends React.Component {

  render() {
    const { text, link, imageUrl, date, inverted } = this.props;
    const imageStyle = {
      maxWidth: "100%",
      height: "auto"
    };

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    const titleStyle = {
      marginTop: "0",
      color: colors.instagramColor
    }

    const badgeStyle = {
      backgroundColor: colors.instagramColor
    };

    return (
      <li class={inverted ? "timeline-inverted" : ""}>
        <div class="timeline-badge" style={badgeStyle}>
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <a target="_blank" href={link}>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h5 style={titleStyle}>{text}</h5>
              <p><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr} via Instagram</small></p>
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
