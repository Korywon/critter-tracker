import React, { Component } from 'react';
import { Badge, Col, Form } from 'react-bootstrap';

// TODO: Implement ways to switch between different configs.
export default class ConfigDropdown extends Component {
  constructor (props) {
    super(props);

    this.updateHemisphere = this.updateHemisphere.bind(this);
    this.updateMonthLayout = this.updateMonthLayout.bind(this);
    this.updateTimeFormat = this.updateTimeFormat.bind(this);

    this.state = {
      hemisphere: "both",
      monthLayout: "expanded",
      timeFormat: 12
    }

    this.props.updateConfig(this.state);
  }

  updateHemisphere (event) {
    this.setState({ hemisphere: event.target.value });
    this.props.updateConfig(this.state);
  }

  updateMonthLayout (event) {
    this.setState({ monthLayout: event.target.value });
    this.props.updateConfig(this.state);
  }

  updateTimeFormat (event) {
    this.setState({ timeFormat: parseInt(event.target.value) });
    this.props.updateConfig(this.state);
  }

  componentDidMount () {
    this.props.updateConfig(this.state);
  }

  render () {
    return (
      <Form.Row>
        <Col>
          <Form.Label>
            <Badge pill variant="dark">Hemisphere</Badge>
          </Form.Label>
          <Form.Control as="select" onChange={this.updateHemisphere}>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="both">Both</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>
            <Badge pill variant="dark">Month Layout</Badge>
          </Form.Label>
          <Form.Control as="select" onChange={this.updateMonthLayout}>
            <option value="expanded">Expanded</option>
            <option value="simple">Simple</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>
            <Badge pill variant="dark">Time Format</Badge>
          </Form.Label>
          <Form.Control as="select" onChange={this.updateTimeFormat}>
            <option value="12">12-hour time</option>
            <option value="24">24-hour time</option>
          </Form.Control>
        </Col>
      </Form.Row>
    );
  }
}