import React from "react";
import { connect } from "react-redux";
import { signup } from "../actions/signup";
import { Button, Form, Col } from "react-bootstrap/";

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
        <Form onSubmit={this.onSubmit}>
          <Form.Label>Sign up</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                onChange={this.onChange}
                value={this.state.name}
                name="name"
                placeholder="name"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                placeholder="email"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                placeholder="password"
              />
            </Col>
            <Col>
              <Button type="submit">Sign Up</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = { signup };

export default connect(null, mapDispatchToProps)(SignupForm);
