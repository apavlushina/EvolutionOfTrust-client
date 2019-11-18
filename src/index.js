import React, { Fragment, Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import Rooms from "./Rooms";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route path="/" component={Main} exact />

        <Route path="/room/:name" component={Room} />
      </Provider>
    );
  }
}
