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
  // in the button JSX: onClick={() => this.onClickFunction(userName)}
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
    console.log("decisionsleng", this.props.decisions);
    const room = rooms.find(room => room.name === name); // this returns the room we are currently in
    // you must be logged in
    console.log("room user test", room);

    if (!room) {
      return (
        <Fragment>
          <p>You can not enter the room without login!</p>
          <Link to="/">Return</Link>
        </Fragment>
      );
    }
    const { users } = room;
    console.log("users test", users);

    //user 1
    const user1 =
      users && users.find(user => user.name === this.props.user.name);
    const user1Decision = user1 && user1.decision;
    const user1Coins = user1 && user1.coins;

    //user 2
    const user2 =
      users && users.find(user => user.name !== this.props.user.name);
    const user2Decision = user2 && user2.decision;
    const user2Coins = user2 && user2.coins;

    // join room button
    const joined =
      users && users.some(user => user.name === this.props.user.name);

    // endgame
    // console.log("room turn test", room.turn);
    let endgame = false;
    if (room.turn > 5) {
      endgame = true; // this will be passed to Room.js as props
      // in Room.js create bootstrap modal to display game result
      // in the modal display a button that resets user and room data in the backend
    }

    return (
      <Room
        joinRoom={this.joinRoom}
        cheat={this.cheat}
        cooperate={this.cooperate}
        name={name}
        joined={joined}
        userOne={user1}
        userOneDecision={user1Decision}
        userOneCoins={user1Coins}
        userTwo={user2}
        userTwoDecision={user2Decision}
        userTwoCoins={user2Coins}
        endgame={endgame}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, rooms: state.rooms };
};

export default connect(mapStateToProps, { join, decision })(RoomContainer);
