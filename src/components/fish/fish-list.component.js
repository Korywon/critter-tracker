import React, { Component } from 'react';


import { Container } from 'react-bootstrap';
import BreadcrumbMenu from '../breadcrumb.component';
import ConfigDropdown from '../config-dropdown.component';

import FishTable from './fish-table.component';

export default class FishList extends Component {
  constructor (props) {
    super(props);

    this.updateHemisphere = this.updateHemisphere.bind(this);
    this.updateMonthLayout = this.updateMonthLayout.bind(this);
    this.updateTimeFormat = this.updateTimeFormat.bind(this);

    this.state = {
      config: {
        hemisphere: "north",
        monthLayout: "expanded",
        timeFormat: 12
      }
    };
  }

  updateHemisphere (event) {
    this.setState({config:{ hemisphere: event.target.value }});
  }

  updateMonthLayout (event) {
    this.setState({ monthLayout: event.target.value });
  }

  updateTimeFormat (event) {
    this.setState({ timeFormat: parseInt(event.target.value) });
  }

  render () {
    return (
      <Container>
        <div className="text-center">
          <p>
            Fish list under construction!
          </p>
        </div>
        <BreadcrumbMenu />
        <ConfigDropdown
          updateHemisphere={this.updateHemisphere} 
          updateMonthLayout={this.updateMonthLayout}
          updateTimeFormat={this.updateTimeFormat} />
        <br />
        <FishTable config={this.state.config} />
      </Container>
    );
  }
}