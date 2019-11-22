import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";

export default function Room(props) {
  // console.log("decision and rooms", props.decisions, props.rooms);
  // const list =
  //   props.users && props.users.length
  //     ? props.users.map((user, index) => (
  //         <p key={index}>User list: {user.name}</p>
  //       ))
  //     : "This room has no users";

  const join = !props.joined && (
    <Button type="submit" onClick={props.joinRoom}>
      Join
    </Button>
  );

  const user1 = props.joined && !props.userOneDecision && (
    <div>
      <Button type="submit" onClick={props.cheat}>
        Cheat
      </Button>
      <Button type="submit" onClick={props.cooperate}>
        Cooperate
      </Button>
    </div>
  );
  const userOneName = props.userOne && props.userOne.name;

  const user2 = props.userTwo && !props.userTwoDecision && (
    <div>
      <Button type="submit" onClick={props.cheat}>
        Cheat
      </Button>
      <Button type="submit" onClick={props.cooperate}>
        Cooperate
      </Button>
    </div>
  );
  const userTwoName = props.userTwo && props.userTwo.name;

  return (
    <Fragment>
      <h2>{props.name}</h2>
      {join}

      <Container>
        <Row>
          <Col>
            <p className={props.joined ? "visible" : "hidden"}>
              {userOneName} has {props.userOneCoins} coins
            </p>
          </Col>
          <Col></Col>
          <Col>
            <p className={props.userTwo ? "visible" : "hidden"}>
              {userTwoName} has {props.userTwoCoins} coins
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {user1}
            <p className={props.userOneDecision ? "visible" : "hidden"}>
              Waiting...
            </p>
          </Col>
          <Col></Col>
          <Col>
            {user2}
            <p className={props.userTwoDecision ? "visible" : "hidden"}>
              Waiting...
            </p>
          </Col>
        </Row>
      </Container>
      <p>
        <Link to="/">Return</Link>
      </p>
    </Fragment>
  );
}
