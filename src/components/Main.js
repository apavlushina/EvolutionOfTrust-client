// in this component, we will show the list of rooms
// use EventSource
import React, { Fragment, Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import RoomsContainer from "./RoomsContainer";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    if (!this.props.jwt) {
      return (
        <Fragment>
          <SignupForm />
          <LoginForm />
          <RoomsContainer />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <RoomsContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { jwt: state.user };
};

export default connect(mapStateToProps)(Main);
