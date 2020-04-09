import React, { Component } from 'react';


import { Container } from 'react-bootstrap';
import BreadcrumbMenu from '../breadcrumb.component';
import ConfigDropdown from '../config-dropdown.component';

import FishTable from './fish-table.component';

export default class FishList extends Component {
  constructor (props) {
    super(props);

    this.updateConfig = this.updateConfig.bind(this);

    this.state = {
      config: {
        hemisphere: "both",
        monthLayout: "expanded",
        timeFormat: 12
      }
    };
  }

  updateConfig (inputState) {
    this.setState({ config: inputState });
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
        <ConfigDropdown updateConfig={this.updateConfig} />
        <br />
        <FishTable config={this.state.config} />
      </Container>
    );
  }
}