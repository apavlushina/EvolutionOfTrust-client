import React, { Fragment, Component } from "react";
import Room from "./Room";
import { connect } from "react-redux";
import { decision } from "../actions/decisions";
import { join } from "../actions/join";
import { Link } from "react-router-dom";

export class RoomContainer extends Component {
  //jwt and userName from redux state
  // const joined = rooms.users.some(user => user.name === ''userName') // returns boolean
  // const join = !joined && <join button JSX> // hides the button if joined
  // new button to link to user:
  // on the class level make a new async onClick function that takes an argument userName:
  // in the button JSX: onClick={() => rhia.onClickFunction(userName)}
  // in the function, send request with jwt header to an endpoint to add point to user
  // in the backend, sends everything back to the client to update user points (easy way)

  joinRoom = () => {
    // console.log(this.props.jwt, this.props.match.params.name);
    this.props.join(this.props.user.jwt, this.props.match.params.name);
  };

  cheat = () => {
    this.props.decision(this.props.user.jwt, "cheat");
  };

  cooperate = () => {
    this.props.decision(this.props.user.jwt, "cooperate");
  };

  render() {
    const { name } = this.props.match.params;
    const { rooms } = this.props;
    console.log("rooms test:", rooms);

    const room = rooms.find(room => room.name === name); // this returns the room we are currently in
    // you must be logged in
    console.log("room user test", room);

    if (!room) {
      return (
        <Fragment>
          <p>This room does not exist</p>
          <Link to="/">Return</Link>
        </Fragment>
      );
    }
    const { users } = room;

    // join room button
    // const joined = room.users.some(user => user.name === "userName");
    // how can i know this username is from this user that clicked
    return (
      <Room
        joinRoom={this.joinRoom}
        cheat={this.cheat}
        cooperate={this.cooperate}
        name={name}
        users={users}
        decisions={this.props.decisions}
        rooms={this.props.rooms}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, rooms: state.rooms, decisions: state.decision };
};

export default connect(mapStateToProps, { join, decision })(RoomContainer);
