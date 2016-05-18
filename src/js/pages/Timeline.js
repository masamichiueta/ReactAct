import "./Timeline.scss"

import React from "react";

import Activity from "../components/activity/Activity";
import * as ActivityActions from "../actions/ActivityActions";
import ActivityStore from "../stores/ActivityStore.js";

export default class Timeline extends React.Component {

  constructor() {
    super();
    this.getActivities = this.getActivities.bind(this);
    this.state = {
      activities: ActivityStore.getAll(),
    };
  }

  componentWillMount() {
    ActivityStore.on("change", this.getActivities);
  }

  componentDidMount() {
    this.loadActivities();
  }

  componentWillUnmount() {
    ActivityStore.removeListener("change", this.getActivities);
  }

  getActivities() {
    this.setState({
      activities: ActivityStore.getAll(),
    });
  }

  loadActivities() {
    ActivityActions.loadActivities();
  }


  render() {
    const { activities } = this.state;
    const ActivityComponents = activities.map((activity, i) => {
      var inverted = i % 2 == 0 ? true : false;
      return <Activity key={i} data={activity.data} date={activity.date} type={activity.type} inverted={inverted} />
    });

    return (
      <ul class="timeline">
        {ActivityComponents}
      </ul>
    );
  }

}
