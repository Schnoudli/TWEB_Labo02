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