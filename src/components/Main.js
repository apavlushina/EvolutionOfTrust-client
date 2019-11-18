// in this component, we will show the list of rooms
// use EventSource
import React, { Fragment, Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Rooms from "./Rooms";

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <SignupForm />
        <LoginForm />
        <Rooms />
      </Fragment>
    );
  }
}
