import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Breadcrumb from '../breadcrumb.component';

const Fish = props => {
  return (
    <div>
      <h4>{ props.fish.name }</h4>
      <p>location: {props.fish.location}</p>
      <p>price: {props.fish.price}</p>
      <p>months: </p>
      <p></p>
      <p></p>
      <Link to={'/fish/' + props.fish.id}>Link</Link>
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
        <Breadcrumb />
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