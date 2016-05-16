import React from "react";

export default class InstagramActivity extends React.Component {

  render() {
    const { data, date, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    return (
      <li class={inverted ? "activity-inverted" : ""}>
        <div class="activity-badge instagram">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <a target="_blank" href={data.link}>
          <div class="activity-panel">
            <div class="activity-user">
              <img class="profile-picture" src={data.user.profile_picture}/>
              <span>{data.user.username}</span>
              <span><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr}</small></span>
            </div>
            <div class="activity-image">
              <img class="activity-image" src={data.images.thumbnail.url}/>
            </div>
          </div>
        </a>
      </li>
    );
  }
}
