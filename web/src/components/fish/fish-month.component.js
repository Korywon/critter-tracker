import React, { Component } from 'react';
import axios from 'axios';

export default class FishMonth extends Component {
  constructor (props) {
    super(props);
    
    this.state = { fishList: [] };
  }
  render () {
    return (
      <h4 className="text-center">
        Fish month under construction!
      </h4>
    );
  }
  
  componentDidMount () {
    axios.get('/data/fish.json')
      .then(response => {
        let tempResponse = response;

        // TODO: Implement props.
        // TODO: Implement JSON parsing.

        this.setState({fishList: tempResponse.data});
      })
      .catch((error) => {
        console.error(error);
      });
  }
}