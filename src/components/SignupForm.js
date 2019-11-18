import React from "react";
import { connect } from "react-redux";
import { signup } from "../actions/signup";

class SignupForm extends React.Component {
  state = { email: "", password: "", name: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.name, this.state.email, this.state.password);
    this.setState({ email: "", password: "", name: "" });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.name}
            name="name"
            placeholder="name"
          />
          <input
            onChange={this.onChange}
            value={this.state.email}
            name="email"
            placeholder="email"
          />
          <input
            onChange={this.onChange}
            value={this.state.password}
            name="password"
            placeholder="password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { signup };

export default connect(null, mapDispatchToProps)(SignupForm);
