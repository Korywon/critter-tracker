import React, { Component } from 'react';
import axios from 'axios';
import { Media } from 'react-bootstrap';

import BreadcrumbMenu from '../breadcrumb.component';

const Fish = props => {
  return (
    <div>
      <Media>
        <img 
          width={100}
          height={100}
          className="mr-3"
          src={"/image/fish/" + props.fish.id + ".webp"}
          alt={props.fish.name}
        />
        <Media.Body>
          <h4>{props.fish.name}</h4>
          <p>{props.fish.location}</p>
          <p>{props.fish.price}</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default class FishInfo extends Component {
  constructor (props) {
    super(props);

    this.state = { fish: {} };
  }

  render () {
    return (
      <div className="container">
        <div className="text-center">
          Fish info under construction!
        </div>
        <br />
        <BreadcrumbMenu />
        { this.fishInfo() }
      </div>
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

        tempFish.id = tempFish.name.replace(/ /g, '_');

        this.setState({fish: tempFish});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fishInfo () {
    return <Fish fish={this.state.fish} key={this.state.fish.id} />
  }
  
}