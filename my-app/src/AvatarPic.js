import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

class AvatarPic extends Component {
  render() {
    const {username, avatarUrl} = this.props;
    return (
      <div class="avatar-parent-child timeline-comment-avatar">
      <img class="avatar rounded-1" alt={username} src={avatarUrl} width="44" height="44" />
    </div>
    )
  }
}

export default AvatarPic;
