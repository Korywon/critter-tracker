import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFish, faBug, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const styles = {
  noTextDecoration: {
    textDecoration: "none"
  },

  menuItem: {
    "&:hover": {
      background: "#c4c4c4"
    }
  }
}

export default class Home extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/bug" style={styles.noTextDecoration}>
              <div className="jumbotron jumbotron-fluid bg-success text-white">
                <div className="container">
                  <h1 className="display-4 text-center">
                    <FontAwesomeIcon icon={faBug} /> Bug
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/fish" style={styles.noTextDecoration}>
              <div className="jumbotron jumbotron-fluid bg-primary text-white">
                <div className="container">
                  <h1 className="display-4 text-center">
                    <FontAwesomeIcon icon={faFish} /> Fish
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Link to="/about" style={styles.noTextDecoration}>
              <div className="jumbotron jumbotron-fluid bg-secondary
                text-white">
                <div className="container">
                  <h1 className="display-4 text-center">
                    <FontAwesomeIcon icon={faQuestionCircle} /> About
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}