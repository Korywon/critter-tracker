import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageNotFound extends Component {
  render () {
    return (
      <div className="container">
        <div className="text-center">
          <h4>404 Page Not Found!</h4>
          <p>
            <Link className="btn btn-success" to="/">Home</Link>
          </p>
        </div>
      </div>
    );
  }
}