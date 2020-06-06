import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      userName: "",
      userPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.checkUser(this.state.userName, this.state.userPassword);
    event.preventDefault();
  }

  checkUser = (userName, userPassword) => {
    var data = {
      userName: userName,
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
