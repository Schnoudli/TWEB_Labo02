import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

import TimelineStructure from './TimelineStructure';
import Detailed3Dots from './Details3Dots';
import EmojiButton from './EmojiButton';
import IssueContent from './IssueContent';
import IssueHeader from './IssueHeaer';
import IssueBody from './IssueBody';
import AvatarPic from './AvatarPic';

class Issue extends Component {
  render() {
    const {username, message, avatarUrl} = this.props;
    return (
      <TimelineStructure>
        <AvatarPic username={username} avatarUrl={avatarUrl}></AvatarPic>
        <IssueContent>
          <IssueHeader username={username}></IssueHeader>
          <IssueBody message={message}></IssueBody>
        </IssueContent>
      </TimelineStructure>
    );
  }
}

export default Issue;