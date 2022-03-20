import React, { Component } from 'react'
import { Badge } from 'react-bootstrap';

import TimeUtility from '../utility/time-utility';

export default class TimeBadge extends Component {
  render() {
    if (this.props.time.length === 0) {
      return(
        <>
          <h6>Time</h6>
          <Badge variant="info">all-day</Badge>
        </>
      );
    } else {
      let badges = this.props.time.map((currTime, index) => {
        if (currTime.hasOwnProperty('start') && currTime.hasOwnProperty('end')) {
          const start12 = TimeUtility.get12HourTime(currTime.start);
          const end12 = TimeUtility.get12HourTime(currTime.end);
          const startVariant = TimeUtility.isDay(currTime.start) ? 'light' : 'dark';
          const endVariant = TimeUtility.isDay(currTime.start) ? 'light' : 'dark';
          return(
            <React.Fragment key={this.props.id + 'time-badge-index'}>
              <Badge variant={startVariant}>
                {start12.hour + end12.meridiem}
              </Badge>
              -
              <Badge variant={endVariant}>
                {end12.hour + end12.meridiem}
              </Badge>
              <br />
            </React.Fragment>
          );
        } else {
          return <></>;
        }
      });

      return(
        <>
          <h6>Time</h6>
          {badges}
        </>
      );
    }
  }
}