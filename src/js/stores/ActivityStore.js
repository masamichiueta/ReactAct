import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ActivityStore extends EventEmitter {
  constructor() {
    super();
    this.activities = [];
  }

  getAll() {
    return this.activities;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_ACTIVITIES": {
        this.activities = action.activities;
        this.emit("change");
        break;
      }
    }
  }

}

const activityStore = new ActivityStore;
dispatcher.register(activityStore.handleActions.bind(activityStore));

export default activityStore;
