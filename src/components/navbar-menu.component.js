import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBug, faFish, faLeaf, faQuestionCircle, faHome
} from '@fortawesome/free-solid-svg-icons';

export default class NavbarMenu extends Component {
  render () {
    return (
      <Navbar bg="success" variant="dark" expand="md" sticky="top">
        <Navbar.Brand as={Link} to="/">
          <FontAwesomeIcon icon={faLeaf} /> Critter Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/bug">
              <FontAwesomeIcon icon={faBug} /> Bug
            </Nav.Link>
            <Nav.Link as={Link} to="/fish">
              <FontAwesomeIcon icon={faFish} /> Fish
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <FontAwesomeIcon icon={faQuestionCircle} /> About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}