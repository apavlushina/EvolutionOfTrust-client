import React, { Component } from "react";
import { url } from "../constants";
import { connect } from "react-redux";
import Rooms from "./Rooms";
import { createRoom } from "../actions/rooms";

class RoomsContainer extends Component {
  state = {
    value: ""
  };

  stream = new EventSource(`${url}/stream`); // EventSource is built in in JS; argument is where we connect to the stream

  componentDidMount = () => {
    // console.log("component did mount");
    // something that happens one time should be put here: showing messages
    this.stream.onmessage = event => {
      // the onmessage property catches the stream data that is sent to the client (what was passed to stream.send in the backend)
      const { data } = event; // each event has an ID and data
      const parsed = JSON.parse(data); // this is always an action object

      this.props.dispatch(parsed);

      // console.log(parsed);
    };
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value }); // changes the value in the state
  };

  onSubmit = event => {
    event.preventDefault(); // so the page won't reload after submitting form
    this.props.dispatch(createRoom(this.state.value, this.props.jwt));
    // const { value } = this.state;

    // const postUrl = `${url}/room`;

    // superagent
    //   .post(postUrl)
    //   .send({ name: value }) // the send ALWAYS takes an object, which will be the body of the request -> message="value"
    //   .then(res => console.log("response test", res));

    this.setState({ value: "" }); //NOT WORKING! solved -> must include value attribute in input JSX element; see below
    // this.state.value = "";
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <Rooms
          rooms={this.props.rooms}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          onClick={this.reset}
          value={this.state.value}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rooms: state.rooms, jwt: state.user };
}

// const mapDispatchToProps = { addRoom, createRoom };

export default connect(mapStateToProps)(RoomsContainer);
