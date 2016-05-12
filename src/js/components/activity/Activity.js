import "./Activity.scss";

import { colors } from "../../style";
import { ActivityType } from "../../util";

import React from "react";
import FacebookActivity from "./FacebookActivity";
import TwitterActivity from "./TwitterActivity";
import InstagramActivity from "./InstagramActivity";
import GitHubActivity from "./GitHubActivity";

export default class Activity extends React.Component {

  render() {
    const { text, link, imageUrl, date, type, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    let activity;
    switch (type) {
      case ActivityType.Facebook:
        activity = <FacebookActivity text={text} link={link} imageUrl={imageUrl} date={date} inverted={inverted} />
        break;
      case ActivityType.Twitter:
        activity = <TwitterActivity text={text} link={link} imageUrl={imageUrl} date={date} inverted={inverted} />      
        break;
      case ActivityType.Instagram:
        activity = <InstagramActivity text={text} link={link} imageUrl={imageUrl} date={date} inverted={inverted} />
        break;
      case ActivityType.GitHub:
        activity = <GitHubActivity text={text} link={link} imageUrl={imageUrl} date={date} inverted={inverted} />
        break;
      case ActivityType.Qiita:
        break;
      default:
        break;
    }

    return (
      activity
    );
  }
}
