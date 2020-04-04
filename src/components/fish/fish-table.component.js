import React, { Component } from 'react'

import axios from 'axios';
import { Badge, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MonthUtility from '../../utility/month-utility';


const FishStatusBadges = props => {
  let badges = [];

  /*
   * Badges for new, available, soon, or unavailable.
   * TODO: Generalize cases for different hemispheres.
   */
  if (props.status.status.new && new Date().getDay() < 8) {
    badges.push(
      <span key={props.status.id + '-statusBadge-new'}>
        <Badge pill variant="primary">new</Badge>&nbsp;
      </span>
    );
  } else if (props.status.status.available) {
    badges.push(
      <span key={props.status.id + '-statusBadge-available'}>
        <Badge pill variant="success">available</Badge>&nbsp;
      </span>
    );
  } else if(props.status.status.soon) {
    badges.push(
      <span key={props.status.id + '-statusBadge-info'}>
        <Badge pill variant="info">next month</Badge>&nbsp;
      </span>
    );
  } else {
    badges.push(
      <span key={props.status.id + '-statusBadge-unavailable'}>
        <Badge pill variant="secondary">unavailable</Badge>&nbsp;
      </span>
    );
  }

  /*
   * If this is the last month to catch the fish. 
   */
  if (props.status.status.lastMonth) {
    badges.push(
      <span key={props.status.id + '-statusBadge-lastMonth'}>
        <Badge pill variant="danger">last month</Badge>&nbsp;
      </span>
    );
  }

  /*
   * If this is the last hour to catch the fish. 
   */
  if (props.status.status.lastHour) {
    badges.push(
      <span key={props.status.id + 'statusBadge-lastHour'}>
        <Badge pill variant="warning">last hour</Badge>&nbsp;
      </span>
    );
  }

  return([
    badges
  ]);
}

/**
 * 
 * @param {Object} props 
 */
const FishHemisphereStatusBadges = props => {
  let badges = [];

  badges.push(
    <FishStatusBadges
      status={{status: props.fish.status.north, id: props.fish.id + '-north'}}
      key={props.fish.id + '-hemisphereStatus-north'} />
  );

  badges.push(
    <hr key={props.fish.id + '-hemisphereStatus-hr'} />
  )

  badges.push(
    <FishStatusBadges
      status={{status: props.fish.status.south, id: props.fish.id + '-south'}}
      key={props.fish.id + '-hemisphereStatus-south'} />
  );

  return(<>{ badges }</>);
}

const FishRow = props => {
  return(
    <tr id={props.fish.id}>
      <td className="text-center">
        <Link to={'/fish/' + props.fish.id }>
          <img 
            width={50}
            height={50}
            className="mr-3"
            src={"/image/fish/" + props.fish.id + ".webp"}
            alt="-"
          />
        </Link>
      </td>
      <td>
        <Link to={'/fish/' + props.fish.id }>
          {props.fish.name}
        </Link>
        <br />
        <FishHemisphereStatusBadges fish={props.fish}
          key={props.fish.id + '-status'}/>
      </td>
      <td>
        { props.fish.size }
      </td>
      <td>
        { props.fish.location }
      </td>
      <td>
        { props.fish.price }
      </td>
      <td>
        n/a
        <hr />
        n/a
      </td>
      <td>
        n/a-n/a
      </td>
    </tr>
  );
}

export default class FishTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
         * TODO: Change the status to north, south, and accomodate for time
         * and month availability.
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
    return this.state.fishList.map(currFish => {
      return <FishRow fish={currFish} key={currFish.name} />
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
            <th width={200}>Name</th>
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