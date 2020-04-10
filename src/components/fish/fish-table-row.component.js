import React, { Component } from 'react'

import MonthUtility from '../../utility/month-utility';

import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StatusBadges from '../status-badges.component';

export default class FishTableRow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      config: this.props.config,
      fish: this.props.fish
    }
  }

  render () {
    let statusBadges = [
      <StatusBadges
        status={{
          status: this.state.fish.status.north,
          id: this.state.fish.id + '-north'}}
        key={this.state.fish.id + '-hemisphereStatus-north'} />,
      <hr />,
      <StatusBadges
        status={{
          status: this.state.fish.status.south,
          id: this.state.fish.id + '-south'}}
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
          { statusBadges }
        </td>
        <td>
          { this.state.fish.size }
        </td>
        <td>
          { this.state.fish.location }
        </td>
        <td>
          { this.state.fish.price }
        </td>
        {/* TODO: Modularize this.  */}
        <td>
          {
            this.state.fish.months ?
              this.state.fish.months.north.map(span => {
                if (span.hasOwnProperty('from') && span.hasOwnProperty('through')) {
                  const fromName = MonthUtility.getMonthName(span.from);
                  const throughName = MonthUtility.getMonthName(span.through);
                  return(<><span>{fromName}-{throughName}</span>&nbsp;</>);
                } else if (span.hasOwnProperty('in')) {
                  const inName = MonthUtility.getMonthName(span.in);
                  return(<><span>{inName}</span>&nbsp;</>);
                } else {
                  return(<></>);
                }
              })
              :
              <Badge pill variant="dark">all-year</Badge>
          }
          <hr />
          {
            this.state.fish.months ?
              this.state.fish.months.south.map(span => {
                if (span.hasOwnProperty('from') && span.hasOwnProperty('through')) {
                  const fromName = MonthUtility.getMonthName(span.from);
                  const throughName = MonthUtility.getMonthName(span.through);
                  return(<><span>{fromName}-{throughName}</span>&nbsp;</>);
                } else if (span.hasOwnProperty('in')) {
                  const inName = MonthUtility.getMonthName(span.in);
                  return(<><span>{inName}</span>&nbsp;</>);
                } else {
                  return(<></>);
                }
              })
              :
              <Badge pill variant="dark">all-year</Badge>
          }
        </td>
        <td>
          {
            this.state.fish.time ?
              this.state.fish.time.map(time => {
              return(<><span>{time.start}-{time.end}</span><br /></>);
              }) : "all-day"
          }
        </td>
      </tr>
    );
  }
}