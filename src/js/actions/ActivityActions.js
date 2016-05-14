import dispatcher from "../dispatcher";
import { ActivityType } from "../util";

function getFacebookActivities() {
  const facebookEndpoint = "https://graph.facebook.com/v2.6/me/posts";
  //expire at 2016/7/11
  const facebookAccessToken = "EAAHxpxZA3Ug0BAMdqdeZBZAxzgnjzTOtlQdzZCgDZAHpDI9DDCgC0BWmGEaJBJAuXPhbEkchlDHw68SJMMIJKqQfLA73rYrKBHRrUHUrSbJSmZBWwFRlWzDnYm40QsxLnGkguYo0IHoCs0K0XkwEfxZBCKjqobxIW4ZD";
  let defer = $.Deferred();
  $.ajax({
    url: facebookEndpoint,
    data: { access_token: facebookAccessToken },
    dataType: "jsonp"
  }).done(function(data, textStatus, jqXHR) {
    if (data.hasOwnProperty('data')) {
      let facebookActivities = data.data.map((data) => {
        return {
          text: data.story,
          link: 'https://facebook.com',
          imageUrl: null,
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
  const instagramAccessToken = "16866771.e0000c4.2ad588423c3d46068e87b5e5d0959340";

  let defer = $.Deferred();
  $.ajax({
    url: instagramEndpoint,
    data: { access_token: instagramAccessToken },
    dataType: "jsonp"
  }).done(function(data, textStatus, jqXHR) {
    if (data.hasOwnProperty('data')) {
      let instagramActivities = data.data.map((data) => {
        const date = new Date(parseInt(data.created_time) * 1000);

        return {
          text: data.caption.text,
          link: data.link,
          imageUrl: data.images.thumbnail.url,
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
  const gitHubEndpoint = "https://api.github.com/users/micchyboy1023/events";

  let defer = $.Deferred();
  $.ajax({
    url: gitHubEndpoint,
    dataType: "jsonp"
  }).done(function(data, textStatus, jqXHR) {
    if (data.hasOwnProperty('data')) {
      let gitHubActivities = data.data.map((data) => {
        return {
          text: data.type,
          link: data.repo.url,
          imageUrl: null,
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
