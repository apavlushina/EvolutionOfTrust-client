import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import EndgameContainer from "./EndgameContainer";

function Coins(props) {
  console.log("Coins props test:", props);
  if (props.user) {
    return (
      <Col>
        <p>
          {props.user.name} has {props.user.coins} coins
        </p>
      </Col>
    );
  }

  return <Col />;
}

function Decisions(props) {
  if (!props.user || !props.cheat || !props.cooperate) {
    console.warn("Decisions needs more data!");

    return <Col />;
  }

  const buttons = !props.user.decision && (
    <div>
      <Button type="submit" onClick={props.cheat}>
        Cheat
      </Button>
      <Button type="submit" onClick={props.cooperate}>
        Cooperate
      </Button>
    </div>
  );

  const waiting = props.user.decision && <p>Waiting...</p>;

  return (
    <Col>
      {buttons}
      {waiting}
    </Col>
  );
}

export default function Room(props) {
  console.log("Room props test:", props);
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

  //  endgame
  // const endgame = props.endgame && (
  //   <EndgameContainer winner={props.winner} loser={props.loser} />
  // );

  return (
    <Fragment>
      <h2>{props.name}</h2>
      {join}

      <Container>
        <Row>
          <Coins user={props.userOne} />
          <Col></Col>
          <Coins user={props.userTwo} />
        </Row>
        <Row>
          <Decisions
            user={props.userOne}
            cheat={props.cheat}
            cooperate={props.cooperate}
          />
          <Col></Col>
          <Decisions
            user={props.userTwo}
            cheat={props.cheat}
            cooperate={props.cooperate}
          />
        </Row>
      </Container>
      <p>
        <Link to="/">Return</Link>
      </p>
      {/* {endgame} */}
    </Fragment>
  );
}
