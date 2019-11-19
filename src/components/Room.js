import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Room(props) {
  return (
    <Fragment>
      <h2>{props.name}</h2>
      <Button type="submit" onClick={props.onClick}>
        Join
      </Button>
      <p>
        <Link to="/">Return</Link>
      </p>
    </Fragment>
  );
}
