import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';


class Link extends Component {
  render() {
    const {id, URL, content} = this.props;
    return (
      <a id={id} class="link-gray-dark v-align-middle no-underline h4 js-navigation-open" href={URL} aria-describedby="hovercard-aria-description">{content}</a>
    );
  }
}

export default Link;

/*
<div class="mt-1 text-small text-gray">
        <span class="opened-by">
          #14134
            opened <relative-time datetime="2018-11-07T08:30:41Z" title="7 Nov 2018, 09:30 CET">37 minutes ago</relative-time> by
            <a class="muted-link" title="Open issues created by lptai" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=22133730" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/facebook/react/issues?q=is%3Aissue+is%3Aopen+author%3Alptai" aria-describedby="hovercard-aria-description">lptai</a>
            
        </span>



        

          <span class="issue-meta-section css-truncate issue-milestone ml-2">
          </span>
      </div>
*/