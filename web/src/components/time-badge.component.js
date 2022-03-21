import React, { Component } from 'react'
import { Badge } from 'react-bootstrap';

import TimeUtility from '../utility/time-utility';

export default function TimeBadge({id, time}) {
  if (time.length === 0) {
    return(
      <>
        <h6>Time</h6>
        <Badge variant="info">all-day</Badge>
      </>
    );
  }

  let badges = time.map((currTime, index) => {
    if (!currTime.hasOwnProperty('start') || !currTime.hasOwnProperty('end')) {
      return <></>;
    }

    const start12 = TimeUtility.get12HourTime(currTime.start);
    const end12 = TimeUtility.get12HourTime(currTime.end);
    const startVariant = TimeUtility.isDay(currTime.start) ? 'light' : 'dark';
    const endVariant = TimeUtility.isDay(currTime.start) ? 'light' : 'dark';

    return(
      <React.Fragment key={id + 'time-badge-index'}>
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
  });

  return(
    <>
      <h6>Time</h6>
      {badges}
    </>
  );
}