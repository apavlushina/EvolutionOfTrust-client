import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Room(props) {
  console.log("decision", props.decisions);
  const list =
    props.users && props.users.length
      ? props.users.map((user, index) => <p key={index}>{user.name}</p>)
      : "This room has no users";

  return (
    <Fragment>
      <h2>{props.name}</h2>
      <Button type="submit" onClick={props.joinRoom}>
        Join
      </Button>
      <div>
        <div className={props.decisions.length ? "hidden" : "visible"}>
          <Button type="submit" onClick={props.cheat}>
            Cheat
          </Button>
          <Button type="submit" onClick={props.cooperate}>
            Cooperate
          </Button>
        </div>
        <p className={!props.decisions ? "visible" : "hidden"}>Waiting...</p>
        <div className={props.decisions.length ? "hidden" : "visible"}>
          <Button type="submit" onClick={props.cheat}>
            Cheat
          </Button>
          <Button type="submit" onClick={props.cooperate}>
            Cooperate
          </Button>
        </div>
        <p className={!props.decisions ? "visible" : "hidden"}>Waiting...</p>
      </div>

      {list}
      <p>
        <Link to="/">Return</Link>
      </p>
    </Fragment>
  );
}
