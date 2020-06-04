import React from "react";
import "./App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { namn: "", emailadress: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    console.log("handleChange", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    this.props.getNewLogin(this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <div className="Loginbox">
        <h4>Välkommen!</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Namn:{" "}
            <input
              type="namn"
              name="namn"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            Email:{" "}
            <input
              type="email"
              name="emailadress"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            Lösenord:{" "}
            <input
              type="password"
              name="password"
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
