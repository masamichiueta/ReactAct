import dispatcher from "../dispatcher";

export function loadActivities() {

  const instagramEndpoint = "https://api.instagram.com/v1/users/self/media/recent";
  const instagramAccessToken = "16866771.e0000c4.2ad588423c3d46068e87b5e5d0959340";

  const gitHubEndpoint = "https://api.github.com/users/micchyboy1023/events";

  let getInstagramActivities = function() {
    let defer = $.Deferred();
    $.ajax({
      url: instagramEndpoint,
      data: { access_token: instagramAccessToken },
      dataType: "jsonp"
    }).done(function(data, textStatus, jqXHR) {
      let instagramActivities = data.data.map((data) => {
        const date = new Date(parseInt(data.created_time) * 1000);

        return {
          text: data.caption.text,
          link: data.link,
          imageUrl: data.images.thumbnail.url,
          date: date
        }
      });
      defer.resolve(instagramActivities);
    }).fail(function() {
      defer.reject();
    });

    return defer.promise();
  };

  let getGitHubActivities = function() {
    let defer = $.Deferred();
    $.ajax({
      url: gitHubEndpoint,
      dataType: "jsonp"
    }).done(function(data, textStatus, jqXHR) {
      let gitHubActivities = data.data.map((data) => {
        return {
          text: data.type,
          link: data.repo.url,
          imageUrl: data.actor.avatar_url,
          date: new Date(data.created_at)
        }
      });
      defer.resolve(gitHubActivities);
    }).fail(function() {
      defer.reject();
    });

    return defer.promise();
  };

  $.when(
    getInstagramActivities(),
    getGitHubActivities()
  ).done(function(data1, data2) {
    let activities = data1.concat(data2).sort((a, b) => {
      return b.date - a.date;
    });
    dispatcher.dispatch({type: "RECEIVE_ACTIVITIES", activities: activities});
  });
}
