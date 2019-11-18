import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

// import Main from "./Main";
// import Room from "./Room";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <SignupForm />
        <LoginForm />
      </Fragment>
    );
  }
}
