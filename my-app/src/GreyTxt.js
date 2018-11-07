import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';


class GreyTxt extends Component {
  render() {
    const { id, datetime, date, ago, user, title } = this.props;
    return (
      <div class="mt-1 text-small text-gray">
        <span class="opened-by">
          #{id} opened <relative-time datetime={datetime} title={date}>{ago}</relative-time> by
            <a class="muted-link" title={title} data-hovercard-type="user" data-octo-dimensions="link_type:self" aria-describedby="hovercard-aria-description"> {user}</a>
        </span>
        <span class="issue-meta-section css-truncate issue-milestone ml-2">
        </span>
      </div>
    );
  }
}

export default GreyTxt;