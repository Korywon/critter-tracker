import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFish, faBug, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Link to="/bug">
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
          <Link to="/fish">
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
          <Link to="/about">
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