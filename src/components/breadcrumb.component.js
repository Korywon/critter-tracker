import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Crumb = props => (
  <li className="breadcrumb-item">
    <Link to={props.path.pathTo}>{props.path.pathname}</Link>
  </li>
);

export default class Breadcrumb extends Component {
  render () {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          { this.breadcrumbItems() }
        </ol>
      </nav>
    );
  }

  breadcrumbItems () {
    return this.getPaths().map(currPath => {
      return <Crumb path={currPath} key={currPath.pathnameRaw} />
    });
  }

  getPaths () {
    let pathnames = window.location.pathname.split(/\//);
    let paths = [];

    /*
     * Maps each pathname to the paths array by assigning raw and processed
     * values and concatenating the previous indexes to build a URL.
     */
    pathnames.map((currPathname, index) => {
      let tempPathname = currPathname;
      let tempPathTo = pathnames.slice(0, index+1).join('/');

      if (!tempPathname.localeCompare('') && index === 0) {
        tempPathname = 'home';
      }

      /*
       * Pushes a built object into the paths array.
       */
      paths.push({
        pathname: tempPathname.replace(/_/g, ' '),
        pathnameRaw: currPathname,
        pathTo: tempPathTo
      });

      return null;
    });

    return paths;
  }
}