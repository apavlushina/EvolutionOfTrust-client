import React, { Component } from "react";
import { url } from "../constants";
import { connect } from "react-redux";
import Rooms from "./Rooms";
import { showRooms, addRoom, createRoom } from "../actions/rooms";

class RoomsContainer extends Component {
  state = {
    value: ""
  };

  stream = new EventSource(`${url}/stream`); // EventSource is built in in JS; argument is where we connect to the stream

  componentDidMount = () => {
    console.log("component did mount");
    // something that happens one time should be put here: showing messages
    this.stream.onmessage = event => {
      // the onmessage property catches the stream data that is sent to the client (what was passed to stream.send in the backend)
      const { data } = event; // each event has an ID and data
      const parsed = JSON.parse(data); // this turns serialized JS string (it was '['','']') back to JSON data (['',''] to be mapped)

      if (Array.isArray(parsed)) {
        // Array.isArray(arg) checks if the arg is an array
        // we do this because the data can be an array (all old msgs) or a string (a single msg)
        this.props.showRooms(parsed); // if it is an array we assume it contains all the messages
      } else {
        console.log(parsed);
        this.props.addRoom(parsed); // remember? setState has to take an argument of the state OBJECT, and it sets the property whichever you puts into the state object as argument
      }

      console.log("data test: ", data);
    };
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value }); // changes the value in the state
  };

  onSubmit = event => {
    event.preventDefault(); // so the page won't reload after submitting form
    this.props.createRoom(this.state.value);
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
  return { rooms: state.rooms };
}

const mapDispatchToProps = { showRooms, addRoom, createRoom };

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);
