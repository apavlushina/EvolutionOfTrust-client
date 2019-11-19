import React, { Component } from "react";
import Room from "./Room";
import { connect } from "react-redux";
import { join } from "../actions/join";

export class RoomContainer extends Component {
  onClick = event => {
    // console.log(this.props.jwt, this.props.match.params.name);
    this.props.join(this.props.jwt, this.props.match.params.name);
  };

  render() {
    return <Room onClick={this.onClick} name={this.props.match.params.name} />;
  }
}

const mapStateToProps = state => {
  return { jwt: state.user };
};

export default connect(mapStateToProps, { join })(RoomContainer);
