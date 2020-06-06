import React from "react";
import "./App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      userName: "",
      userEmail: "",
      userPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.checkUser(
      this.state.userName,
      this.state.userEmail,
      this.state.userPassword
    );
    event.preventDefault();
  }

  checkUser = (userName, userEmail, userPassword) => {
    var data = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };
    fetch("http://localhost:3000/userLogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console
          .log(data)
          .this.setState(data.userId)
          .this.props.userLoggingin(data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Loginbox">
        <h2>Välkommen!</h2>
        <p>Logga in med dina användaruppgifter</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Namn:{" "}
            <input
              type="text"
              name="userName"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            Email:{" "}
            <input
              type="email"
              name="userEmail"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            Lösenord:{" "}
            <input
              type="password"
              name="userPassword"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            <br />
          </label>
          <input type="submit" value="Logga in" />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Login;
