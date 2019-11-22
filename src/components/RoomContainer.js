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
    // console.log("rooms test:", rooms);
    // console.log("decisionsleng", this.props.decisions);
    const room = rooms.find(room => room.name === name); // this returns the room we are currently in
    // you must be logged in
    // console.log("room user test", room);

    if (!room) {
      return (
        <Fragment>
          <p>You can not enter the room without login!</p>
          <Link to="/">Return</Link>
        </Fragment>
      );
    }
    const { users } = room;
    // console.log("users test", users);

    //user 1
    const user1 =
      users && users.find(user => user.name === this.props.user.name);

    //user 2
    const user2 =
      users && users.find(user => user.name !== this.props.user.name);

    // join room button
    const joined =
      users && users.some(user => user.name === this.props.user.name);

    // endgame
    // console.log("room turn test", room.turn);
    /////////////////////////////////////////////////
    const getWinner = players => {
      const userCoinsArray = users.map(user => user.coins);
      const largerCoinsAmount = userCoinsArray.reduce((pre, cur) =>
        cur > pre ? cur : pre
      );
      return players.find(player => player.coins === largerCoinsAmount);
    };
    const players = room.users;
    function end() {
      if (room.turn === 6) {
        return {
          endgame: true, // this will be passed to Room.js as props
          // in Room.js create bootstrap modal to display game result
          // in the modal display a button that resets user and room data in the backend
          winner: getWinner(players),
          loser: players.find(player => player.name !== winner.name)
        };
      }

      return {};
    }

    const { endgame, winner, loser } = end();
    ////////////////////////////////////////////////////
    // const getWinner = (player1, player2, player1Coins, player2Coins) =>
    //   player1Coins > player2Coins ? player1 : player2;
    // const getLoser = (player1, player2, player1Coins, player2Coins) =>
    //   player1Coins > player2Coins ? player2 : player1;

    console.log("room users test", users);
    console.log("room turn test", room.turn);
    console.log("endgame?", endgame);
    console.log("winner test", winner);
    console.log("loser test", loser);

    return (
      <Room
        joinRoom={this.joinRoom}
        cheat={this.cheat}
        cooperate={this.cooperate}
        name={name}
        joined={joined}
        userOne={user1}
        userTwo={user2}
        endgame={endgame}
        winner={winner}
        loser={loser}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, rooms: state.rooms };
};

export default connect(mapStateToProps, { join, decision })(RoomContainer);
