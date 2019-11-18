import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";

class LoginForm extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(LoginForm);
