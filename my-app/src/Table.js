import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

import Cell from './Cell';


class Table extends Component {
  render() {
    return (
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
    );
  }
}

export default Table;