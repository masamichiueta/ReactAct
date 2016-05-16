import "./Activity.scss";

import { ActivityType } from "../../util";

import React from "react";
import FacebookActivity from "./FacebookActivity";
import InstagramActivity from "./InstagramActivity";
import GitHubActivity from "./GitHubActivity";

export default class Activity extends React.Component {

  render() {
    const { data, date, type, inverted } = this.props;

    let activity;
    switch (type) {
      case ActivityType.Facebook:
        activity = <FacebookActivity data={data} date={date} inverted={inverted} />
        break;
      case ActivityType.Instagram:
        activity = <InstagramActivity data={data} date={date} inverted={inverted} />
        break;
      case ActivityType.GitHub:
        activity = <GitHubActivity data={data} date={date} inverted={inverted} />
        break;
      default:
        break;
    }

    return (
      activity
    );
  }
}
