import React, { Component } from "react";
import { connect } from "react-redux";
import Rooms from "./Rooms";
import { createRoom } from "../actions/rooms";

class RoomsContainer extends Component {
  state = {
    value: ""
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value }); // changes the value in the state
  };

  onSubmit = event => {
    event.preventDefault(); // so the page won't reload after submitting form
    createRoom(this.state.value, this.props.user.jwt);
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
          reset={this.reset}
          value={this.state.value}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rooms: state.rooms, user: state.user };
}

// const mapDispatchToProps = { addRoom, createRoom };

export default connect(mapStateToProps)(RoomsContainer);
