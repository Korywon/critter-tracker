import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBug, faFish, faHome, faLeaf, faQuestionCircle 
} from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-dark bg-success navbar-expand">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={ faLeaf } /> Critter Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={ faHome } /> Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/bug" className="nav-link">
                <FontAwesomeIcon icon={ faBug } /> Bug
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/fish" className="nav-link">
                <FontAwesomeIcon icon={ faFish } /> Fish
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon={ faQuestionCircle } /> About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}