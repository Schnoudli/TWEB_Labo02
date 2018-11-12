import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import './githubstyle1.css';
import './githubstyle2.css';
import IssueDiscussion from './IssueDiscussion';


class MyLink extends Component {
  render() {
    const {id, URL, content} = this.props;
    return (
      //<Link to='./app'><a id={id} class="link-gray-dark v-align-middle no-underline h4 js-navigation-open" href={URL} aria-describedby="hovercard-aria-description">{content}</a></Link>
      //<a id={id} class="link-gray-dark v-align-middle no-underline h4 js-navigation-open" href={URL} aria-describedby="hovercard-aria-description">{content}</a>
        <Link to='page1'>{content}</Link>
      );
  }
}

export default MyLink;