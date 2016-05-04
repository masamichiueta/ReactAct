import dispatcher from "../dispatcher";

export function loadActivities() {

  const instagramEndpoint = "https://api.instagram.com/v1/users/self/media/recent";
  const accessToken = "16866771.e0000c4.2ad588423c3d46068e87b5e5d0959340";
  let instagramActivities = [];

  $.ajax({
    url: instagramEndpoint,
    data: { access_token: accessToken },
    dataType: "jsonp"
  }).done(function(data, textStatus, jqXHR) {
    instagramActivities = data.data.map((data) => {
      const date = new Date(parseInt(data.created_time) * 1000);

      return {
        text: data.caption.text,
        link: data.link,
        imageUrl: data.images.thumbnail.url,
        date: date
      }
    });
    dispatcher.dispatch({type: "RECEIVE_ACTIVITIES", activities: instagramActivities});
  });
}
