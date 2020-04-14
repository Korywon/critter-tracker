import React, { Component } from 'react'

import axios from 'axios';
import { Table } from 'react-bootstrap';

import MonthUtility from '../../utility/month-utility';
import FishTableRow from './fish-table-row.component';

export default class FishTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: this.props.config,
      fishList: []
    };
  }
  
  componentDidMount () {
    axios.get('/data/fish.json')
      .then(response => {
        let tempResponse = response;

        /*
         * Creates id key for each object by replacing space chars with '_'
         * chars.
         * TODO: Move the status evaluation outside of this function or have a
         * way to determine which hemisphere the user is in before.
         */
        for (var index in tempResponse.data) {
          tempResponse.data[index].id =
            tempResponse.data[index].name.replace(/ /g, '_');
          tempResponse.data[index].status =
            MonthUtility.getStatusHemispheres(
              new Date().getMonth(),
              tempResponse.data[index].months
          );
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

  /**
   * Maps the data in the array into rows of fish data.
   */
  buildFishTableRows () {
    return this.state.fishList.map((currFish, index) => {
      return(
        <FishTableRow
          config={this.props.config} fish={currFish}
          key={currFish.id + index} />
      );
    });
  }

  /**
   * Renders the entire fish table.
   */
  render () {
    return(
      <Table striped bordered hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th width={50}>Icon</th>
            <th width={175}>Name</th>
            <th width={50}>Size</th>
            <th width={75}>Location</th>
            <th width={75}>Price</th>
            <th>Months</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          { this.buildFishTableRows() }
        </tbody>
      </Table>
    );
  }
}