import React, { Component } from 'react'

import MonthUtility from '../utility/month-utility';
import { ProgressBar } from 'react-bootstrap';

export default class MonthBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      timeSpans: this.props.timeSpans
    };
  }

  /**
   * Builds the badge based on the current month and if the month is in the
   * timespan.
   * @param {Number} monthNumber 
   * @param {boolean} inTimeSpan 
   */
  getBadge (monthNumber, inTimeSpan) {
    const currMonth = new Date().getMonth();
    const name = MonthUtility.getMonthName(monthNumber).substr(0,3);
    const season = MonthUtility.getMonthSeason(monthNumber);
    const triangleLeft = String.fromCharCode(0x25c2);
    const triangleRight = String.fromCharCode(0x25b8)

    let variant = "secondary";
    let label = name;

    /*
     * If month is the current month, add the black triangle indicators. 
     */
    if (currMonth === monthNumber) {
      label = triangleRight + label + triangleLeft;
    }

    if (inTimeSpan) {
      if (!season.localeCompare('winter')) {
        variant = "info";
      } else if (!season.localeCompare('spring')) {
        variant = "success";
  
      } else if (!season.localeCompare('summer')) {
        variant = "danger";
  
      } else if (!season.localeCompare('fall')) {
        variant = "warning";
      }
    }

    return <ProgressBar key={monthNumber} 
      label={label} variant={variant} now={10} />;
  }

  /**
   * Builds the month bars.
   */
  getMonthBar () {
    let bars = [];

    /*
     * Loops througb each month number. If the
     */
    for (let month = 0; month < 12; month++) {
      let inTimeSpan = true;
      if (this.state.timeSpans.length > 0) {
        inTimeSpan =
          MonthUtility.inTimeSpans(month, this.state.timeSpans);
      }
      bars.push(this.getBadge(month, inTimeSpan));
    }

    return(
      <ProgressBar min={0} max={120}>
        {bars}
      </ProgressBar>
    );

  }

  render () {
    return this.getMonthBar();
  }
}