import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import RoomContainer from "./components/RoomContainer";
// import Room from "";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={Main} exact />
        <Route path="/room/:name" component={RoomContainer} />
      </Fragment>
    );
  }
}
