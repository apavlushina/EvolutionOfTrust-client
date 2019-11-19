import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Col } from "react-bootstrap";

export default function Rooms(props) {
  if (!props.rooms) {
    return null;
  }
  const list = props.rooms.map((room, index) => (
    <p key={index}>
      <Link to={`/room/${room.name}`}>{room.name}</Link>
    </p>
  ));

  return (
    <div>
      <Form>
        <Form.Label>Create room</Form.Label>
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="new room"
              onChange={props.onChange}
              value={props.value} // !!! This sets the input display to be like the state; this makes it a fully controlled form
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={props.onSubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={props.reset}>
              Reset
            </Button>
          </Col>
        </Form.Row>
      </Form>

      {list}
    </div>
  );
}
