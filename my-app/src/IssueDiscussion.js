import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

import Issue from './Issue';

class IssueDiscussion extends Component {
  render() {
    return (
      <div>
        <Issue username="gaearon" message="This is a message" avatarUrl="https://avatars2.githubusercontent.com/u/810438?s=88&v=4"></Issue>
        <Issue username="torvalds" message="Shitty app" avatarUrl="https://avatars0.githubusercontent.com/u/1024025?s=460&v=4"></Issue>
        <Issue username="octocat" message="Came just to say hi" avatarUrl="https://avatars0.githubusercontent.com/u/583231?s=460&v=4"></Issue>
      </div>
    );
  }
}

export default IssueDiscussion;