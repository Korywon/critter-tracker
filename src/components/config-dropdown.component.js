import React, { Component } from 'react';
import { Badge, Col, Form } from 'react-bootstrap';

// TODO: Implement ways to switch between different configs.
export default class ConfigDropdown extends Component {
  render () {
    return (
      <Form.Row>
        <Col>
          <Form.Label>
            <Badge pill variant="dark">Hemisphere</Badge>
          </Form.Label>
          <Form.Control as="select" onChange={this.props.updateHemisphere}>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="both">Both</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>
            <Badge pill variant="dark">Time Format</Badge>
          </Form.Label>
          <Form.Control as="select" onChange={this.props.updateTimeFormat}>
            <option value="12">12-hour time</option>
            <option value="24">24-hour time</option>
          </Form.Control>
        </Col>
      </Form.Row>
    );
  }
}