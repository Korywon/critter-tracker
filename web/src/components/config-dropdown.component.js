import { Badge, Col, Form } from 'react-bootstrap';

// TODO: Implement ways to switch between different configs.
function ConfigDropdown({onHemisphereChange, onTimeFormatChange}) {
  return (
    <Form.Row>
      <Col>
        <Form.Label>
          <Badge pill variant="dark">Hemisphere</Badge>
        </Form.Label>
        <Form.Control as="select" onChange={event => onHemisphereChange(event.target.value)}>
          <option value="north">North</option>
          <option value="south">South</option>
          <option value="both">Both</option>
        </Form.Control>
      </Col>
      <Col>
        <Form.Label>
          <Badge pill variant="dark">Time Format</Badge>
        </Form.Label>
        <Form.Control as="select" onChange={event => onTimeFormatChange(event.target.value)}>
          <option value="12">12-hour time</option>
          <option value="24">24-hour time</option>
        </Form.Control>
      </Col>
    </Form.Row>
  );
}

export default ConfigDropdown;