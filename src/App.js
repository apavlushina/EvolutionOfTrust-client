import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import { url } from "./constants";
import Main from "./components/Main";
import RoomContainer from "./components/RoomContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  stream = new EventSource(`${url}/stream`); // EventSource is built in in JS; argument is where we connect to the stream

  ids = [];

  componentDidMount = () => {
    // console.log("component did mount");
    // something that happens one time should be put here: showing messages
    this.stream.onmessage = event => {
      // event.preventDefault();
      console.log("only once");
      // the onmessage property catches the stream data that is sent to the client (what was passed to stream.send in the backend)
      const { data } = event; // each event has an ID and data
      const parsed = JSON.parse(data); // this is always an action object
      console.log("parsed test:", parsed);

      const { id } = parsed;
      console.log("id test:", id);

      console.log("ids test:", this.ids);

      if (this.ids.includes(id)) {
        console.log("old");
        console.warn("This action is duplicted:", parsed);
      } else {
        console.log("new");
        this.ids.push(id);

        this.props.dispatch(parsed);
      }
    };
  };

  render() {
    return (
      <Fragment>
        <Route path="/" component={Main} exact />
        <Route path="/room/:name" component={RoomContainer} />
      </Fragment>
    );
  }
}

export default connect()(App);
