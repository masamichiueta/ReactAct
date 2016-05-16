import React from "react";

export default class GitHubActivity extends React.Component {

  render() {
    const { data, date, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    let url = "";
    let actionStr = "";

    switch (data.type) {
      case "CommitCommentEvent":
        url = data.payload.comment.html_url;
        actionStr = `${data.actor.login} committed a comment in ${data.repo.name}`;
        break;
      case "CreateEvent":
        url = "//github.com/" + data.repo.name;
        actionStr = `${data.actor.login} created ${data.payload.ref_type} in ${data.repo.name}`;
        break;
      case "DeleteEvent":
        url = "//github.com/" + data.repo.name;
        actionStr = `${data.actor.login} deleted ${data.payload.ref_type} in ${data.repo.name}`;
        break;
      case "ForkEvent":
        url = "//github.com/" + data.repo.name;
        actionStr = `${data.actor.login} forked ${data.payload.forkee.full_name}`;
        break;
      case "GollumEvent":
        url = data.payload.pages[0].html_url;
        actionStr = `${data.actor.login} ${data.payload.pages[0].action} ${data.payload.pages[0].page_name} in ${data.repo.name}`;
        break;
      case "IssueCommentEvent":
        url = data.payload.issue.html_url;
        actionStr = `${data.actor.login} ${data.payload.action} a issue in ${data.repo.name}`;
        break;
      case "IssuesEvent":
        url = data.payload.issue.html_url;
        actionStr = `${data.actor.login} ${data.payload.action} a issue in ${data.repo.name}`;
        break;
      case "MemberEvent":
        url = data.payload.member.html_url;
        actionStr = `${data.actor.login} ${data.payload.action} ${data.payload.member.login} in ${data.repo.name}`;
        break;
      case "MembershipEvent":
        url = data.payload.member.html_url;
        actionStr = `${data.actor.login} ${data.payload.action} ${data.payload.member.login} in ${data.repo.name}`;
        break;
      case "PublicEvent":
        url = "//github.com/" + data.repo.name;
        actionStr = `${data.actor.login} opened ${data.repo.name}`;
        break;
      case "PullRequestEvent":
        url = data.payload.pull_request.html_url;
        actionStr = `${data.actor.login} ${data.payload.action} a pull request in ${data.repo.name}`;
        break;
      case "PullRequestReviewCommentEvent":
        url = data.payload.comment.html_url;
        actionStr = `${data.actor.login} ${data.payload.action} a comment in ${data.repo.name}`;
        break;
      case "PushEvent":
        url = "//github.com/" + data.repo.name;
        actionStr = `${data.actor.login} pushed to ${data.repo.name}`;
        break;
      case "ReleaseEvent":
        url = data.payload.release.html_url;
        actionStr = `${data.actor.login} ${data.payload.action} ${data.repo.name}`;
        break;
      case "RepositoryEvent":
        url = "//github.com/" + data.repo.name;
        actionStr = `${data.actor.login} ${data.payload.action} ${data.repo.name}`;
      break;
      case "WatchEvent":
        url = "//github.com/" + data.repo.name;
        actionStr = `${data.actor.login} ${data.payload.action} to watch ${data.repo.name}`;
        break;
      default:
        url = "//github.com/" + data.repo.name;
        break;
    }

    return (
      <li class={inverted ? "activity-inverted" : ""}>
        <div class="activity-badge github">
          <i class="fa fa-github" aria-hidden="true"></i>
        </div>
        <div class="activity-panel">
          <div class="activity-user">
            <img class="profile-picture" src={data.actor.avatar_url}/>
            <span>{data.actor.login}</span>
            <span><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr}</small></span>
          </div>
          <a target="_blank" href={url}>
            <p>{actionStr}</p>
          </a>
        </div>
      </li>
    );
  }
}
