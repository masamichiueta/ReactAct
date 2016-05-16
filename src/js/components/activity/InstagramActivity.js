import React from "react";

export default class InstagramActivity extends React.Component {

  render() {
    const { data, date, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${(date.getHours()<10?'0':'') + date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`;

    return (
      <li class={inverted ? "activity-inverted" : ""}>
        <div class="activity-badge instagram">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <div class="activity-panel">
          <div class="clearfix">
            <div class="activity-user pull-xs-left">
              <img class="profile-picture" src={data.user.profile_picture}/>
              <span class="profile-username">{data.user.username}</span>
            </div>
            <p class="pull-xs-right"><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr}</small></p>
          </div>
          <div class="activity-action">
            <a class="main-color" target="_blank" href={data.link}>{data.caption.text}</a>
            <div>
              <img class="activity-image" src={data.images.thumbnail.url}/>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
