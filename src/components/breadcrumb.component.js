import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const Crumb = props => (
  <Breadcrumb.Item componentclass={Link} href={props.path.pathTo}>
    {props.path.pathname}
  </Breadcrumb.Item>
);

export default class BreadcrumbMenu extends Component {
  render () {
    return (
      <Breadcrumb>
          { this.breadcrumbItems() }
      </Breadcrumb>
    );
  }

  breadcrumbItems () {
    return this.getPaths().map(currPath => {
      return <Crumb path={currPath} key={currPath.pathnameRaw} />
    });
  }

  /*
   * Gets the pathnames for the breadcrumb links and text. 
   */
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
        tempPathTo = '/';
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