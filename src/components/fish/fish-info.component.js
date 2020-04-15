import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';

import MonthUtility from '../../utility/month-utility';
import MonthBar from '../month-bar.component';

import BreadcrumbMenu from '../breadcrumb.component';
import StatusBadges from '../status-badges.component';

const Status = props => {
  let northMonths = [];
  let southMonths = [];

  if (props.fish.hasOwnProperty('months')) {
    if (props.fish.months.hasOwnProperty('north')) {
      northMonths = props.fish.months.north;
    }
    if (props.fish.months.hasOwnProperty('south')) {
      southMonths = props.fish.months.south;
    }
  }

  return (
    <>
      <h6>Northern Hemisphere</h6>
      <StatusBadges
        status={{
          status: props.fish.status.north,
          id: props.fish.id + '-north'}}
        key={props.fish.id + '-hemisphereStatus-north'} />
      <br />
      <br />
      <MonthBar timeSpans={northMonths} />
      <br />
      <h6>Southern Hemisphere</h6>
      <StatusBadges
        status={{
          status: props.fish.status.south,
          id: props.fish.id + '-south'}}
        key={props.fish.id + '-hemisphereStatus-south'} />
      <br />
      <br />
      <MonthBar timeSpans={southMonths} />
    </>
  );
}

/**
 * TODO: Implement the time badges. Might need to create components for the
 * time badges before anything.
 * @param {*} props 
 */
const Time = props => {
  return (
    <>

    </>
  );
}

const Fish = props => {

  if (Object.keys(props.fish).length > 0) {
    return (
      <Card>
        <Card.Body>
          <Container className="text-center">
            <img 
              width={50}
              height={50}
              className="mr-3"
              src={"/image/fish/" + props.fish.id + ".webp"}
              alt={props.fish.name}
            />
            <Card.Title>
              {props.fish.name}
            </Card.Title>
            <hr />
            <Status fish={props.fish} />
            <hr />
          </Container>
          <p>{props.fish.location}</p>
          <p>
            <img 
              width={25} height={25} src="/image/bell_bag.png"
              alt="bell_bag.png"/>&nbsp;
            {props.fish.price}
          </p>
          <Time fish={props.fish} />
        </Card.Body>
      </Card>
    );
  } else {
    return(<></>);
  }
}

export default class FishInfo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fish: {
        name: null,
        location: null,
        size: null,
        price: null,
        months: {
          north: [],
          south: []
        },
        time: [],
        status: {
          north: {},
          south: {}
        }
      } 
    };
  }

  fishInfo () {
    return <Fish fish={this.state.fish} key={this.state.fish.id} />
  }

  render () {
    return (
      <Container>
        <div className="text-center">
          Fish info under construction!
        </div>
        <br />
        <BreadcrumbMenu />
        <Container
          style={{paddingLeft: "10rem", paddingRight: "10rem"}}>
          { this.fishInfo() }
        </Container> 
      </Container>
    );
  }

  componentDidMount () {
    axios.get('/data/fish.json')
      .then(response => {
        /*
         * Replaces space chars in the name with '_' chars. Then matched
         * against the name passed in from the router. 
         */
        let tempFish = response.data.find(
          x => x.name.replace(/ /g, '_') === this.props.match.params.name
        );

        /*
         * Replaces the name's space characters with underscores and uses that
         * as the id. 
         */
        tempFish.id = tempFish.name.replace(/ /g, '_');

        /*
         * Retrieves the status for each hemisphere. 
         */
        tempFish.status =
          MonthUtility.getStatusHemispheres(
            new Date().getMonth(),
            tempFish.months
        );
        
        this.setState({fish: tempFish});
      })
      .catch((error) => {
        console.error(error);
      });
  }
}