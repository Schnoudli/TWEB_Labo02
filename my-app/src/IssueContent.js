import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

class IssueContent extends Component {
  render() {
    return (
      <div class="timeline-comment-group js-minimizable-comment-group js-targetable-comment" id="issuecomment-436644796">
        <div class="unminimized-comment comment previewable-edit js-comment js-task-list-container timeline-comment reorderable-task-lists" data-body-version="15985775e5ddcfa937ca00a627bb094c" data-unfurl-authenticity-token="Dr5DGKmZgNfEn0vkaCuIGy/M8uQZS6BRTLUGb06o8obRqIMicmAyuqMDwDa6ZoMbJRBSnHGXaV6/0LbfWRSQtA==">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default IssueContent;
