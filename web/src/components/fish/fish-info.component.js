import { Component } from 'react';
import axios from 'axios';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';

import MonthUtility from '../../utility/month-utility';
import MonthBar from '../month-bar.component';
import TimeBadge from '../time-badge.component';

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
        status={props.fish.status.north}
        id={props.fish.id + '-north'}
        key={props.fish.id + '-hemisphereStatus-north'} />
      <br />
      <br />
      <MonthBar timeSpans={northMonths} />
      <br />
      <h6>Southern Hemisphere</h6>
      <StatusBadges
        status={props.fish.status.south}
        id={props.fish.id + '-south'}
        key={props.fish.id + '-hemisphereStatus-south'} />
      <br />
      <br />
      <MonthBar timeSpans={southMonths} />
    </>
  );
}

const Location = props => {
  return(
    <>
      <h6>Location</h6>
      <Badge pill variant="light">
        {props.location}
      </Badge>
      <br />
    </>
  );
}

const Price = props => {
  return(
    <>
      <h6>Price</h6>
      <img
        width={25} height={25} src="/image/bell_bag.png"
        alt="bell_bag.png"/>&nbsp;
      <Badge pill variant="light">
        {props.price}
      </Badge>
      <br />
    </>
  );
}

const Size = props => {
  return(
    <>
      <h6>Size</h6>
      <Badge pill variant="light">
        {props.size}
      </Badge>
      <br />
    </>
  );
}

const Fish = props => {
  if (Object.keys(props.fish).length > 0) {
    return (
      <Card>
        <Card.Body>
          <div className="text-center">
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
            <TimeBadge
              id={props.fish.id}
              time={props.fish.time ? props.fish.time : []} />
            <hr />
          </div>
          <Row>
            <Col>
              <Location location={props.fish.location} />
              <br />
            </Col>
            <Col>
              <Size size={props.fish.size} />
            </Col>
            <Col>
              <Price price={props.fish.price} />
            </Col>
          </Row>
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
        { this.fishInfo() }
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