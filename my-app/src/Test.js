import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

import EmojiButton from './EmojiButton';
import Detailed3Dots from './Details3Dots';
import TimelineStructure from './TimelineStructure';

class Test extends Component {
  render() {
    return (
      <TimelineStructure>
        <p>Coucou</p>
      </TimelineStructure>

    )
  }
}

export default Test;