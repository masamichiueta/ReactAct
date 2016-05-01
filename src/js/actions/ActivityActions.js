import dispatcher from "../dispatcher";

export function loadActivities() {
  dispatcher.dispatch({type: "RECEIVE_ACTIVITIES", activities: [
    {text: "First activity", imageUrl: "https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12530881_1376847028997066_598205622_n.jpg"},
    {text: "Second activity", imageUrl: "https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12328003_1723385431216699_1914869246_n.jpg"},
    {text: "Third activity", imageUrl: "https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10644049_589572924524332_1248049380_n.jpg"},
  ]});
}
