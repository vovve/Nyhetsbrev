import React from "react";
import "./App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    this.props.getNewLogin(this.state.value);
    event.preventDefault();
  };
  render() {
    // const Login = this.props.showLogin;

    return (
      <div className="Loginbox">
        <h4>Välkommen!</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Namn:{" "}
            <input
              type="namn"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            Email:{" "}
            <input
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            Lösenord:{" "}
            <input
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
          </label>
          <input type="submit" value="Logga in" />
        </form>
      </div>
    );
  }
}

export default Login;
