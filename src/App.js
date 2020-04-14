import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/about.component';
import NavbarMenu from './components/navbar-menu.component';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import BugList from './components/bug/bug-list.component';
import FishInfo from './components/fish/fish-info.component';
import FishList from './components/fish/fish-list.component';
import FishMonth from './components/fish/fish-month.component';
import Home from "./components/home.component";
import PageNotFound from "./components/page-not-found.component";

function App() {
  return (
    <Router>
      <NavbarMenu />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bug" exact component={BugList} />
        <Route path="/bug/:name" component="" />
        <Route path="/bug/month/:month" component="" />
        <Route path="/bug/status/:status" component="" />
        <Route path="/fish" exact component={FishList} />
        <Route path="/fish/:name" component={FishInfo} />
        <Route path="/fish/month/:month" component={FishMonth} />
        <Route path="/fish/status/:status" component="" />
        <Route path="/about" exact component={About} />
        <Route component={PageNotFound} status={404} />
      </Switch>
      <br />
      <Container className="text-center">
        <a className="text-dark" 
          href="https://www.github.com/korywon/critter-tracker"
          rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="6x" />
        </a>
      </Container>
      <br />
    </Router>
  );
}

export default App;
