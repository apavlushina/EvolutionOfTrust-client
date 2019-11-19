import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";
import { Button, Form, Row, Col } from "react-bootstrap";

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
        <Form onSubmit={this.onSubmit}>
          <Form.Label>Login</Form.Label>
          <Form.Row>
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
              <Button type="submit">Login</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(LoginForm);
