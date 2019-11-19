import React, { Component } from "react";
import Room from "./Room";
import { connect } from "react-router-dom";
import { join } from "../actions/join";

export class RoomContainer extends Component {
  onClick = event => {
    this.props.join(this.props.jwt);
  };

  render() {
    return <Room onClick={this.onClick} />;
  }
}

mapStateToProps = state => {
  return { jwt: state.user };
};

export default connect(mapStateToProps, { join })(RoomContainer);
