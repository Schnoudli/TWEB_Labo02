import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
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
            <Cell URL="www.test.com" content="That doesn't work" id="1235" datetime="datetime" date="8 novembre 2018" ago="51 min ago" user="octocat" title="Issue opened by octocat"></Cell>
            <Cell URL="www.test.com" content="Fix this" id="1236" datetime="datetime" date="9 novembre 2018" ago="52 min ago" user="randomuser" title="Issue opened by randomuser"></Cell>
            <Cell URL="www.test.com" content="This app sucks" id="1237" datetime="datetime" date="10 novembre 2018" ago="53 min ago" user="test" title="Issue opened by test"></Cell>
            <Cell URL="www.test.com" content="Just came to say hi" id="1238" datetime="datetime" date="11 novembre 2018" ago="54 min ago" user="torvalds" title="Issue opened by torvalds"></Cell>
            </div>  
        </div>
      </div>
    );
  }
}

export default Table;