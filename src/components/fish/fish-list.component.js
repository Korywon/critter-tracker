import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Breadcrumb from '../breadcrumb.component';

const Fish = props => (
  <tr id={props.fish.id}>
    <td className="text-center">-</td>
    <td>
      <Link style={{display:"block"}} to={'/fish/' + props.fish.id }>
        {props.fish.name}
      </Link>
    </td>
    <td>-</td>
    <td>{props.fish.location}</td>
    <td>
      { props.fish.price }
    </td>
    <td>-</td>
    <td>-</td>
  </tr>
);

export default class FishList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fishList: []
    };
  }

  render () {
    return (
      <div className="container">
        <div className="text-center">
          <p>
            Fish list under construction!
          </p>
        </div>
        <Breadcrumb />
        <table className="table table-sm table-bordered table-hover
          table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Icon</th>
              <th>Name</th>
              <th>Size</th>
              <th>Location</th>
              <th>Price</th>
              <th>Months</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            { this.fishList() }
          </tbody>
        </table>
      </div>
    );
  }
  
  componentDidMount () {
    axios.get('/data/fish.json')
      .then(response => {
        let tempResponse = response;

        /*
         * Creates id key for each object by replacing space chars with '_'
         * chars.
         */
        for (var index in tempResponse.data) {
          tempResponse.data[index].id =
            tempResponse.data[index].name.replace(/ /g, '_');
        }

        /*
         * Sorts by location and then by name.
         */
        tempResponse.data.sort((a, b,) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          const locationA = a.location.toLowerCase();
          const locationB = b.location.toLowerCase();

          if (locationA < locationB) { return -1; }
          if (locationA > locationB) { return 1; }
          if (nameA < nameB) { return -1; }
          if (nameA > nameB) { return 1; }
          return 0;
        });

        this.setState({fishList: tempResponse.data});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  fishList () {
    return this.state.fishList.map(currFish => {
      return <Fish fish={currFish} key={currFish.name} />
    });
  }
}