import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Col, ListGroup } from "react-bootstrap";

export default function Rooms(props) {
  if (!props.rooms) {
    return null;
  }
  const list = props.rooms.map((room, index) => (
    <ListGroup key={index}>
      <Link to={`/room/${room.name}`} className="a">
        <ListGroup.Item action>{room.name}</ListGroup.Item>
      </Link>
    </ListGroup>
  ));

  return (
    <Fragment>
      <Form onSubmit={props.onSubmit}>
        <Form.Label>Create room</Form.Label>
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="room name"
              onChange={props.onChange}
              value={props.value} // !!! This sets the input display to be like the state; this makes it a fully controlled form
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={props.reset}>
              Reset
            </Button>
          </Col>
        </Form.Row>
      </Form>

      {list}
    </Fragment>
  );
}
