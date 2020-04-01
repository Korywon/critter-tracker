import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Badge, Table } from 'react-bootstrap';
import BreadcrumbMenu from '../breadcrumb.component';

const Fish = props => {
  return (
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
        <Link style={{display:"block"}} to={'/fish/' + props.fish.id }>
          {props.fish.name}
        </Link>
        { <Badges fish={props.fish} key={props.fish.id} /> }
      </td>
      <td>long</td>
      <td>
        {props.fish.location}
      </td>
      <td>
        { props.fish.price }
      </td>
      <td>
        <Badge pill variant="dark">North</Badge> n/a-n/a
        <hr />
        <Badge pill variant="dark">South</Badge> n/a-n/a
      </td>
      <td>
        n/a-n/a
      </td>
    </tr>
  );
}

const Badges = props => {
  let badges = [];                                            // array of badges

  /*
   * If the fish is currently available. 
   */
  if (props.fish.available) {
    badges.push(<><Badge variant="success">available</Badge>&nbsp;</>);
  } else {
    badges.push(<><Badge variant="secondary">unavailable</Badge>&nbsp;</>);
  }

  /*
   * If this is the last hour to catch the fish. 
   */
  if (props.fish.lastHour) {
    badges.push(<><Badge variant="warning">last hour</Badge>&nbsp;</>);
  }

  /*
   * If this is the last month to catch the fish. 
   */
  if (props.fish.lastMonth) {
    badges.push(<><Badge variant="danger">last month</Badge>&nbsp;</>);
  }

  return(
    <>{badges}</>
  );
}

export default class FishList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fishList: []
    };
  }

  render () {
    return (
      <>
        <div className="container">
          <div className="text-center">
            <p>
              Fish list under construction!
            </p>
          </div>
          <BreadcrumbMenu />
          <Table striped bordered hover responsive size="sm">
            <thead className="thead-dark">
              <tr>
                <th width={50}>Icon</th>
                <th width={150}>Name</th>
                <th width={50}>Size</th>
                <th width={80}>Location</th>
                <th width={80}>Price</th>
                <th>Months</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              { this.fishList() }
            </tbody>
          </Table>
        </div>
      </>
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