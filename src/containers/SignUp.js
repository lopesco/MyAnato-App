import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./SignUp.css";

export default class SingUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      universidade: "",
      email: "",
      password: "",
      confirmPassword: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ newUser: "teste" });
  };

  handleConfirmationSubmit = async event => {
    event.preventDefault();
  };

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>Nome</ControlLabel>
          <FormControl
            autoFocus
            value={this.state.name}
            onChange={this.handleChange}
            type="name"
          />
        </FormGroup>

        <FormGroup controlId="universidade" bsSize="large">
          <ControlLabel>Instituição de ensino</ControlLabel>
          <FormControl
            value={this.state.universidade}
            onChange={this.handleChange}
            type="universidade"
          />
        </FormGroup>

        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>E-mail</ControlLabel>
          <FormControl
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Senha</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Repita sua senha</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Link to="/mainpage">
          <Button bsSize="large" type="submit">
            Cadastrar-se
          </Button>
        </Link>
      </form>
    );
  }
  render() {
    return <div className="SignUp">{this.renderForm()}</div>;
  }
}
