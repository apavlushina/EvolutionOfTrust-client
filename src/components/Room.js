import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Room(props) {
  console.log({ usersInRoom: props.users });
  const list =
    props.users && props.users.length
      ? props.users.map((user, index) => <p key={index}>{user.name}</p>)
      : "This room has no users";

  // const status =
  //   props.user.length !== 2
  //     ? <p>Waiting for players...</p>
  //     : props.function(props.users) // we need function

  return (
    <Fragment>
      <h2>{props.name}</h2>
      <Button type="submit" onClick={props.onClick}>
        Join
      </Button>
      {list}
      {status}
      <p>
        <Link to="/">Return</Link>
      </p>
    </Fragment>
  );
}
