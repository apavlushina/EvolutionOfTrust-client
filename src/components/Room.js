import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";

export default function Room(props) {
  console.log("decision and rooms", props.decisions, props.rooms);
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

  const user1 = props.joined &&
    !props.decisions.some(user => user.name === props.userName) && (
      <div>
        <p>{props.userName}</p>
        <Button type="submit" onClick={props.cheat}>
          Cheat
        </Button>
        <Button type="submit" onClick={props.cooperate}>
          Cooperate
        </Button>
      </div>
    );

  const user2Name =
    props.users.find(user => user.name !== props.userName) &&
    props.users.find(user => user.name !== props.userName).name;
  const user2 = props.users.some(user => user.name !== props.userName) &&
    !props.decisions.some(user => user.name !== props.userName) && (
      <div>
        <p>{user2Name}</p>
        <Button type="submit" onClick={props.cheat}>
          Cheat
        </Button>
        <Button type="submit" onClick={props.cooperate}>
          Cooperate
        </Button>
      </div>
    );

  return (
    <Fragment>
      <h2>{props.name}</h2>
      {join}
      <div>
        {user1}
        <p className={props.decisions ? "visible" : "hidden"}>Waiting...</p>
        {user2}
        <p className={!props.decisions ? "visible" : "hidden"}>Waiting...</p>
      </div>

      {/* {list} */}
      <p>
        <Link to="/">Return</Link>
      </p>
    </Fragment>
  );
}
