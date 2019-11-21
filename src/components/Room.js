import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Room(props) {
  const list =
    props.users && props.users.length
      ? props.users.map((user, index) => (
          <p key={index}>
            {user.name}, your coins: {user.coins}
          </p>
        ))
      : "This room has no users";

  return (
    <Fragment>
      <h2>{props.name}</h2>
      <Button type="submit" onClick={props.joinRoom}>
        Join
      </Button>
      <div>
        <div className={!props ? "hidden" : "visible"}>
          <Button type="submit" onClick={props.cheat}>
            Cheat
          </Button>
          <Button type="submit" onClick={props.cooperate}>
            Cooperate
          </Button>
        </div>
        <p className={!props ? "visible" : "hidden"}>Waiting...</p>
        <div className={!props ? "hidden" : "visible"}>
          <Button type="submit" onClick={props.cheat}>
            Cheat
          </Button>
          <Button type="submit" onClick={props.cooperate}>
            Cooperate
          </Button>
        </div>
        <p className={!props ? "visible" : "hidden"}>Waiting...</p>
      </div>

      {list}
      <p>
        <Link to="/">Return</Link>
      </p>
    </Fragment>
  );
}
