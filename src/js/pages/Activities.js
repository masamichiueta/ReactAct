import React from "react";

import Activity from "../components/Activity";
import * as ActivityActions from "../actions/ActivityActions";
import ActivityStore from "../stores/ActivityStore.js";

export default class Activities extends React.Component {

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
      return <Activity key={i} text={activity.text} imageUrl={activity.imageUrl} />
    })

    return (
      <div class="row">
        {ActivityComponents}
      </div>
    );
  }

}
