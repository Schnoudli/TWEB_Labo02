import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

import EmojiButton from './EmojiButton';
import Detailed3Dots from './Details3Dots';

class IssueHeader extends Component {
  render() {
    const {username} = this.props;
    return (


      <div class="timeline-comment-header clearfix">
        <div class="timeline-comment-actions">

          <EmojiButton></EmojiButton>

          <Detailed3Dots></Detailed3Dots>

        </div>


        <span class="timeline-comment-label text-bold tooltipped tooltipped-multiline tooltipped-s" aria-label="This user is a member of the Facebook organization.">
          Member
</span>


        <h3 class="timeline-comment-header-text f5 text-normal">


          <strong class="css-truncate">


            <a class="author text-inherit css-truncate-target" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=810438" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href={username} aria-describedby="hovercard-aria-description">{username}</a>


          </strong>

          commented
  
<a href="#issuecomment-436644796" id="issuecomment-436644796-permalink" class="timestamp js-timestamp"><relative-time datetime="2018-11-07T14:40:55Z" title="7 Nov 2018, 15:40 CET">2 hours ago</relative-time></a>


          <span class="js-comment-fragment">
            <include-fragment class="js-comment-edit-history d-inline">
            </include-fragment>
          </span>
        </h3>
      </div>


    )
  }
}

export default IssueHeader;