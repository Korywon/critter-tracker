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
    let label = name;
    let style = {};
    let variant = "secondary";

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

    /*
     * If month is the current month, set style to an empty object. Allows
     * only the current month to have a special style.
     */
    if (currMonth === monthNumber) {
      style = {textDecoration: "underline"};
    }

    return <ProgressBar key={monthNumber}
      label={label} variant={variant} now={10}
      style={style} />;
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