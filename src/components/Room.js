import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Room(props) {
  return (
    <Fragment>
      <Button type="submit" onClick={props.onClick}>
        Join
      </Button>

      <Link to="/">Return</Link>
    </Fragment>
  );
}
