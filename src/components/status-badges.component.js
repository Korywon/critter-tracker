import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

/**
 * This class is used to generate badges based on the status that is passed in.
 */
export default class StatusBadges extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: this.props.id,
      status: this.props.status
    };
  }

  render () {
    let badges = [];
  
    /*
     * Badges for new, available, soon, or unavailable.
     */
    if (this.state.status.new && new Date().getDay() < 8) {
      badges.push(
        <span key={this.state.id + '-statusBadge-new'}>
          <Badge pill variant="primary">new</Badge>&nbsp;
        </span>
      );
    } else if (this.state.status.available) {
      badges.push(
        <span key={this.state.id + '-statusBadge-available'}>
          <Badge pill variant="success">available</Badge>&nbsp;
        </span>
      );
    } else if(this.state.status.soon) {
      badges.push(
        <span key={this.state.id + '-statusBadge-info'}>
          <Badge pill variant="info">next month</Badge>&nbsp;
        </span>
      );
    } else {
      badges.push(
        <span key={this.state.id + '-statusBadge-unavailable'}>
          <Badge pill variant="secondary">unavailable</Badge>&nbsp;
        </span>
      );
    }
  
    /*
     * If this is the last month to catch the fish. 
     */
    if (this.state.status.lastMonth) {
      badges.push(
        <span key={this.state.id + '-statusBadge-lastMonth'}>
          <Badge pill variant="danger">last month</Badge>&nbsp;
        </span>
      );
    }
  
    /*
     * If this is the last hour to catch the fish. 
     */
    if (this.state.status.lastHour) {
      badges.push(
        <span key={this.state.id + 'statusBadge-lastHour'}>
          <Badge pill variant="warning">last hour</Badge>&nbsp;
        </span>
      );
    }
    
    return(badges);
  }
}