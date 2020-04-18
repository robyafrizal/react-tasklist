import React from "react";

import { Form, Row, Col } from "react-bootstrap";

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: "2020-04-15",
      times: "00:00",
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  handleDate(e) {
    const newDate = e.target.value;
    console.log(newDate);
    this.setState({
      dates: newDate,
    });
  }
  handleTime(e) {
    const newTime = e.target.value;
    console.log(newTime);
    this.setState({
      times: newTime,
    });
  }

  render() {
    return (
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Control
              type="date"
              value={this.state.dates}
              onChange={this.handleDate}
            />
          </Col>
          <Col>
            <Form.Control
              type="time"
              name="startTime"
              aria-label="Start Time"
              value={this.state.times}
              onChange={this.handleTime}
            />
          </Col>
        </Row>
        {/* <p>
          {this.state.dates} - {this.state.times}
        </p> */}
      </Form>
    );
  }
}
