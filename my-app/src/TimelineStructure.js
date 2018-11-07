import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

class TimelineStructure extends Component {
  render() {
    const content = this.props;
    return (
      <div class="container new-discussion-timeline experiment-repo-nav  ">
        <div class="repository-content ">
          <div class="issues-listing js-check-all-container">
            <div class="js-issues-results">
              <div clas="clearfix">
                <div class="discussion-timeline js-quote-selection-container">
                  <div class="timeline-comment-wrapper js-comment-container">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default TimelineStructure;