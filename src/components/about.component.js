import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class About extends Component {
  render () {
    return (
      <div className="container">
        <div className="text-center">
          <p>
            About under construction!
          </p>
          <a href="https://www.github.com/korywon/critter-tracker"
            rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="6x" />
          </a>
        </div>
      </div>
    );
  }
}