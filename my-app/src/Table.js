import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

import Cell from './Cell';


class Table extends Component {
  render() {
    return (

      /*
      // Logo 
      <div>
        <div class="float-left pt-2 pl-3">
          <span class="tooltipped tooltipped-n" aria-label="Open issue">
            <svg class="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
          </span>
        </div>

        <div class="float-left col-9 lh-condensed p-2">

          <a id="issue-id-14134" class="link-gray-dark v-align-middle no-underline h4 js-navigation-open" data-hovercard-type="issue" data-hovercard-url="/facebook/react/issues/14134/hovercard" href="/facebook/react/issues/14134" aria-describedby="hovercard-aria-description">package "scheduler": "^0.11.0" didn't exist but it has been defined in react-test-render</a>
          <div class="mt-1 text-small text-gray">
            <span class="opened-by">
              #14134
            opened <relative-time datetime="2018-11-07T08:30:41Z" title="7 Nov 2018, 09:30 CET">21 minutes ago</relative-time> by
            <a class="muted-link" title="Open issues created by lptai" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=22133730" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/facebook/react/issues?q=is%3Aissue+is%3Aopen+author%3Alptai" aria-describedby="hovercard-aria-description">lptai</a>

            </span>





            <span class="issue-meta-section css-truncate issue-milestone ml-2">
            </span>
          </div>
        </div>


        <div class="float-right col-2">
          <div class="float-left col-7 pt-2 pr-3 text-right">

            <div class="AvatarStack AvatarStack--right ">
              <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1" aria-label="Assigned to ">
              </div>
            </div>
          </div>

          <div class="float-right col-5 no-wrap pt-2 pr-3 text-right">
          </div>
        </div>
      </div>
      */


      <div class="repohead-details-container clearfix container">
        <div class="border-right border-bottom border-left" aria-label="Issues" role="group">
          <div class="js-navigation-container js-active-navigation-container">
            <Cell URL="www.test.com" content="Issue content" id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"></Cell>
            <Cell URL="www.test.com" content="Issue content" id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"></Cell>
            <Cell URL="www.test.com" content="Issue content" id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"></Cell>
            <Cell URL="www.test.com" content="Issue content" id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"></Cell>
            <Cell URL="www.test.com" content="Issue content" id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"></Cell>
          </div>
          </div>
          </div>

      /*
      <div class="repohead-details-container clearfix container">
      <div class="border-right border-bottom border-left" aria-label="Issues" role="group">
        <div class="js-navigation-container js-active-navigation-container">

            <div id="issue_14134" class="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row read" data-id="378187364" aria-selected="false">
              <div class="d-table table-fixed width-full Box-row--drag-hide position-relative">

           
       <div class="float-left pt-2 pl-3">
                  <span class="tooltipped tooltipped-n" aria-label="Open issue">
                    <svg class="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                  </span>
                </div>

   <div class="float-left col-9 lh-condensed p-2">

                  <a id="issue-id-14134" class="link-gray-dark v-align-middle no-underline h4 js-navigation-open" data-hovercard-type="issue" data-hovercard-url="/facebook/react/issues/14134/hovercard" href="/facebook/react/issues/14134" aria-describedby="hovercard-aria-description">package "scheduler": "^0.11.0" didn't exist but it has been defined in react-test-render</a>
                  <div class="mt-1 text-small text-gray">
                    <span class="opened-by">
                      #14134
           opened <relative-time datetime="2018-11-07T08:30:41Z" title="7 Nov 2018, 09:30 CET">2 hours ago</relative-time> by
           <a class="muted-link" title="Open issues created by lptai" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=22133730" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/facebook/react/issues?q=is%3Aissue+is%3Aopen+author%3Alptai" aria-describedby="hovercard-aria-description">lptai</a>

                    </span>





                    <span class="issue-meta-section css-truncate issue-milestone ml-2">
                    </span>
                  </div>
                </div>


                <div class="float-right col-2">
                  <div class="float-left col-7 pt-2 pr-3 text-right">

                    <div class="AvatarStack AvatarStack--right ">
                      <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1" aria-label="Assigned to ">
                      </div>
                    </div>
                  </div>

                  <div class="float-right col-5 no-wrap pt-2 pr-3 text-right">
                  </div>
                </div>

              </div>
            </div>


            <div id="issue_14132" class="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row read" data-id="378120850" aria-selected="false">
              <div class="d-table table-fixed width-full Box-row--drag-hide position-relative">

           
       <div class="float-left pt-2 pl-3">
                  <span class="tooltipped tooltipped-n" aria-label="Open issue">
                    <svg class="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                  </span>
                </div>

   <div class="float-left col-9 lh-condensed p-2">

                  <a id="issue-id-14132" class="link-gray-dark v-align-middle no-underline h4 js-navigation-open" data-hovercard-type="issue" data-hovercard-url="/facebook/react/issues/14132/hovercard" href="/facebook/react/issues/14132" aria-describedby="hovercard-aria-description">When I add a react component, The new component's props is preComponent's props</a>
                  <div class="mt-1 text-small text-gray">
                    <span class="opened-by">
                      #14132
           opened <relative-time datetime="2018-11-07T02:51:22Z" title="7 Nov 2018, 03:51 CET">7 hours ago</relative-time> by
           <a class="muted-link" title="Open issues created by Phlicess" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=11753644" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/facebook/react/issues?q=is%3Aissue+is%3Aopen+author%3APhlicess" aria-describedby="hovercard-aria-description">Phlicess</a>

                    </span>





                    <span class="issue-meta-section css-truncate issue-milestone ml-2">
                    </span>
                  </div>
                </div>


                <div class="float-right col-2">
                  <div class="float-left col-7 pt-2 pr-3 text-right">

                    <div class="AvatarStack AvatarStack--right ">
                      <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1" aria-label="Assigned to ">
                      </div>
                    </div>
                  </div>

                  <div class="float-right col-5 no-wrap pt-2 pr-3 text-right">
                    <a href="/facebook/react/issues/14132" class="muted-link" aria-label="4 comments">
                      <svg class="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>
                      <span class="text-small text-bold">4</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>


            <div id="issue_14125" class="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row read navigation-focus" data-id="377987649" aria-selected="true">
              <div class="d-table table-fixed width-full Box-row--drag-hide position-relative">

           
       <div class="float-left pt-2 pl-3">
                  <span class="tooltipped tooltipped-n" aria-label="Open issue">
                    <svg class="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                  </span>
                </div>

   <div class="float-left col-9 lh-condensed p-2">

                  <a id="issue-id-14125" class="link-gray-dark v-align-middle no-underline h4 js-navigation-open" data-hovercard-type="issue" data-hovercard-url="/facebook/react/issues/14125/hovercard" href="/facebook/react/issues/14125" aria-describedby="hovercard-aria-description">Autofocus Text puts cursor at end instead of beginning</a>
                  <div class="mt-1 text-small text-gray">
                    <span class="opened-by">
                      #14125
           opened <relative-time datetime="2018-11-06T18:57:12Z" title="6 Nov 2018, 19:57 CET">15 hours ago</relative-time> by
           <a class="muted-link" title="Open issues created by Matthew-Goldberg" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=24279057" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/facebook/react/issues?q=is%3Aissue+is%3Aopen+author%3AMatthew-Goldberg" aria-describedby="hovercard-aria-description">Matthew-Goldberg</a>

                    </span>





                    <span class="issue-meta-section css-truncate issue-milestone ml-2">
                    </span>
                  </div>
                </div>


                <div class="float-right col-2">
                  <div class="float-left col-7 pt-2 pr-3 text-right">

                    <div class="AvatarStack AvatarStack--right ">
                      <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1" aria-label="Assigned to ">
                      </div>
                    </div>
                  </div>

                  <div class="float-right col-5 no-wrap pt-2 pr-3 text-right">
                  </div>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>
        */
    );
  }
}

export default Table;