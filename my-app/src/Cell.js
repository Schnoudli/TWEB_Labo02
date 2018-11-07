import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

import Link from './Link';
import GreyTxt from './GreyTxt';
import Logo from './Logo';


class Cell extends Component {
  render() {
    const {id, URL, content, datetime, date, ago, user, title} = this.props;
    return (
      <div class="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row read" aria-selected="false">
        <div class="d-table table-fixed width-full Box-row--drag-hide position-relative">
          <Logo />
          <div class="float-left col-9 lh-condensed p-2">
            <Link id={id} URL={URL} content={content} />
            <GreyTxt id={id} datetime={datetime} date={date} ago={ago} user={user} title={title} />
          </div>
        </div >
      </div >
    );
  }
}

export default Cell;