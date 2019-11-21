// in this component, we will show the list of rooms
// use EventSource
import React, { Fragment, Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import RoomsContainer from "./RoomsContainer";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";

class Main extends Component {
  render() {
    if (!this.props.user.jwt) {
      return (
        <Fragment>
          <Jumbotron>
            <SignupForm />
            <LoginForm />
          </Jumbotron>
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
  return { user: state.user };
};

export default connect(mapStateToProps)(Main);
