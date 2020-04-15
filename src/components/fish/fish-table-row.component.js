import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import MonthBar from '../month-bar.component';
import StatusBadges from '../status-badges.component';

export default class FishTableRow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      config: this.props.config,
      fish: this.props.fish
    }
  }

  /**
   * Builds the north and south hermisphere status badges.
   */
  getStatusBadges () {
    let statusBadges = [
      <StatusBadges
        status={this.state.fish.status.north}
        id={this.state.fish.id + '-north'}
        key={this.state.fish.id + '-hemisphereStatus-north'} />,
      <hr key={this.state.fish.id + 'hemisphereStatus-hr'} />,
      <StatusBadges
        status={this.state.fish.status.south}
        id={this.state.fish.id + '-south'}
        key={this.state.fish.id + '-hemisphereStatus-south'} />
    ];

    /*
     * If the config is north, only use the north badge. If south,
     * only use the south badge.
     */
    if (!this.props.config.hemisphere.localeCompare('north')) {
      statusBadges = [statusBadges[0]];
    } else if (!this.props.config.hemisphere.localeCompare('south')) {
      statusBadges = [statusBadges[2]];
    }

    return statusBadges;
  }

  /**
   * Builds the north and south hemisphere month bars.
   */
  getMonthBars () {
    let northMonths = [];
    let southMonths = [];

    /**
     * If the state has months and has the north and south hemisphere time
     * spans.
     */
    if (this.state.fish.hasOwnProperty('months')) {
      if (this.state.fish.months.hasOwnProperty('north')) {
        northMonths = this.state.fish.months.north;
      }
      if (this.state.fish.months.hasOwnProperty('south')) {
        southMonths = this.state.fish.months.south;
      }
    }

    let monthBars = [
      <MonthBar key={this.state.fish.id + '-monthBar-north'}
        timeSpans={northMonths} />,
      <hr key={this.state.fish.id + 'monthBar-hr'} />,
      <MonthBar key={this.state.fish.id + '-monthBar-south'}
        timeSpans={southMonths} />
    ];

    /*
     * If the config is north, only use the north badge. If south,
     * only use the south badge.
     */
    if (!this.props.config.hemisphere.localeCompare('north')) {
      monthBars = [monthBars[0]];
    } else if (!this.props.config.hemisphere.localeCompare('south')) {
      monthBars = [monthBars[2]];
    }

    return monthBars;
  }

  render () {

    return(
      <tr id={this.state.fish.id}>
        <td className="text-center">
          <Link to={'/fish/' + this.state.fish.id }>
            <img 
              width={50}
              height={50}
              className="mr-3"
              src={"/image/fish/" + this.state.fish.id + ".webp"}
              alt="-"
            />
          </Link>
        </td>
        <td>
          <Link to={'/fish/' + this.state.fish.id }>
            {this.state.fish.name}
          </Link>
          <br />
          { this.getStatusBadges() }
        </td>
        <td>
          { this.state.fish.size }
        </td>
        <td>
          { this.state.fish.location }
        </td>
        <td>
          <img
            width={25}
            height={25}
            className="mr-3"
            src={'/image/bell_bag.png'}
            alt="-"
          />
          { this.state.fish.price }
        </td>
        {/* TODO: Use month badges instead of bars to save space. */}
        <td>
          { this.getMonthBars() }
        </td>
        <td>
          {/*
            this.state.fish.time ?
              this.state.fish.time.map(time => {
              return(<><span>{time.start}-{time.end}</span><br /></>);
              }) : "all-day"
            */}
        </td>
      </tr>
    );
  }
}