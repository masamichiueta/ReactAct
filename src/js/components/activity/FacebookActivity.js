import React from "react";

export default class FacebookActivity extends React.Component {

  render() {
    const { data, date, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${(date.getHours()<10?'0':'') + date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`;
    const profilePictureURL = `//graph.facebook.com/${data.from.id}/picture`;

    let actionStr = "";
    if (data.hasOwnProperty("message")) {
      actionStr = data.message;
    }

    return (
      <li class={inverted ? "activity-inverted" : ""}>
        <div class="activity-badge facebook">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </div>
        <div class="activity-panel">
          <div class="clearfix">
            <div class="activity-user pull-xs-left">
              <img class="profile-picture" src={profilePictureURL}/>
              <span class="profile-username">{data.from.name}</span>
            </div>
            <p class="activity-datetime pull-xs-right"><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr}</small></p>
          </div>
          <div class="activity-action">
            <a class="main-color" target="_blank" href={data.link}>{actionStr}</a>
            {(() => {
              if (data.hasOwnProperty("picture"))
                return <div>
                  <img class="activity-image" src={data.picture}/>
                </div>;
              })()
            }
            </div>
          </div>
        </li>
    );
  }
}
