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
      var inverted = i % 2 == 0 ? false : true;
      return <Activity key={i} text={activity.text} link={activity.link} imageUrl={activity.imageUrl} date={activity.date} inverted={inverted} />
    })

    const ulStyle = {
      ulBefore: {
        top: '0',
        bottom: '0',
        position: 'absolute',
        width: '3px',
        backgroundColor: '#eeeeee',
        left: '50%',
        marginLeft: '-1.5px'
      },
      ul: {
        listStyle: 'none',
        padding: '20px 0 20px',
        position: 'relative'
      }
    }

    return (
      <div>
        <span style={ulStyle.ulBefore}></span>
        <ul style={ulStyle.ul}>
          {ActivityComponents}
        </ul>
      </div>
    );
  }

}
