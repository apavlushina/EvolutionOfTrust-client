import React, { Fragment, Component } from "react";
import Room from "./Room";
import { connect } from "react-redux";
import { join } from "../actions/join";
import { Link } from "react-router-dom";

export class RoomContainer extends Component {
  onClick = event => {
    // console.log(this.props.jwt, this.props.match.params.name);
    this.props.join(this.props.jwt, this.props.match.params.name);
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

    return <Room onClick={this.onClick} name={name} users={users} />;
  }
}

const mapStateToProps = state => {
  return { jwt: state.user, rooms: state.rooms };
};

export default connect(mapStateToProps, { join })(RoomContainer);
