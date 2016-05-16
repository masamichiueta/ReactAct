import React from "react";

export default class FacebookActivity extends React.Component {

  render() {
    const { data, date, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
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
        <a target="_blank" href={data.link}>
          <div class="activity-panel">
            <div class="activity-user">
              <img class="profile-picture" src={profilePictureURL}/>
              <span>{data.from.name}</span>
              <span><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr}</small></span>
            </div>
            {(() => {
              if (data.hasOwnProperty("picture"))
                return <div class="activity-image">
                  <img class="activity-image" src={data.picture}/>
                </div>;
              })()
            }
          </div>
        </a>
      </li>
    );
  }
}
