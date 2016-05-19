import dispatcher from "../dispatcher";
import { ActivityType } from "../util";
import { Config } from "../config";

function getFacebookActivities() {
  const facebookEndpoint = "https://graph.facebook.com/v2.6/me/posts?fields=message,created_time,link,picture,from";

  let defer = $.Deferred();
  $.ajax({
    url: facebookEndpoint,
    data: { access_token: Config.Facebook.AccessToken },
    dataType: "jsonp"
  }).done(function(data, textStatus, jqXHR) {
    if (data.hasOwnProperty('data')) {
      let facebookActivities = data.data.map((data) => {
        return {
          data: data,
          date: new Date((data.created_time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
          type: ActivityType.Facebook
        }
      });
      defer.resolve(facebookActivities);
    } else {
      defer.resolve([]);
    }
  }).fail(function() {
    defer.reject();
  });

  return defer.promise();
}

function getInstagramActivities() {
  const instagramEndpoint = "https://api.instagram.com/v1/users/self/media/recent";

  let defer = $.Deferred();
  $.ajax({
    url: instagramEndpoint,
    data: { access_token: Config.Instagram.AccessToken },
    dataType: "jsonp"
  }).done(function(data, textStatus, jqXHR) {
    if (data.hasOwnProperty('data')) {
      let instagramActivities = data.data.map((data) => {
        const date = new Date(parseInt(data.created_time) * 1000);

        return {
          data: data,
          date: date,
          type: ActivityType.Instagram
        }
      });
      defer.resolve(instagramActivities);
    } else {
      defer.resolve([]);
    }
  }).fail(function() {
    defer.reject();
  });

  return defer.promise();
};

function getGitHubActivities() {
  const gitHubEndpoint = `https://api.github.com/users/${Config.GitHub.UserName}/events`;

  let defer = $.Deferred();
  $.ajax({
    url: gitHubEndpoint,
    dataType: "jsonp"
  }).done(function(data, textStatus, jqXHR) {
    if (data.hasOwnProperty('data')) {
      let gitHubActivities = data.data.map((data) => {
        return {
          data: data,
          date: new Date(data.created_at),
          type: ActivityType.GitHub
        }
      });
      defer.resolve(gitHubActivities);
    } else {
      defer.resolve([]);
    }
  }).fail(function() {
    defer.reject();
  });

  return defer.promise();
};

export function loadActivities() {

  $.when(
    getFacebookActivities(),
    getInstagramActivities(),
    getGitHubActivities()
  ).done(function(data1, data2, data3) {
    let activities = data1.concat(data2).concat(data3).sort((a, b) => {
      return b.date - a.date;
    });
    dispatcher.dispatch({type: "RECEIVE_ACTIVITIES", activities: activities});
  });
}
