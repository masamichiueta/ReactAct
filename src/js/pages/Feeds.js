import React from "react";

import Activity from "../components/Activity";

export default class Feeds extends React.Component {

  render() {
    const Activities = [
      {title: "Activity1", imageUrl: "https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12530881_1376847028997066_598205622_n.jpg"},
      {title: "Activity2", imageUrl: "https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12328003_1723385431216699_1914869246_n.jpg"},
      {title: "Activity3", imageUrl: "https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10644049_589572924524332_1248049380_n.jpg"},
    ].map((activity, i) => <Activity key={i} title={activity.title} imageUrl={activity.imageUrl}/>);

    return (
      <div class="row">
        {Activities}
      </div>
    );
  }

}
