import React from "react";
import "./App.css";
import Checkbox from "./Checkbox";

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
      isSubscribing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.userRegistration(
      this.state.userName,
      this.state.userEmail,
      this.state.userPassword,
      this.state.isSubscribing
    );
    event.preventDefault();
  }

  UserRegistration = (userName, userEmail, userPassword, isSubscribing) => {
    var data = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      isSubscribing: isSubscribing,
    };
    fetch("http://localhost:3000/userRegistration", {
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
          .this.setState({
            userId: data.userId,
            userName: data.userName,
            userEmail: data.userEmail,
            userPassword: data.userPassword,
            isSubscribing: data.isSubscribing,
          })
          .this.props.userLoggingin(data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Loginbox">
        <h3>Registrera dig här för att få nyhetsbrevet</h3>
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
          </label>
        </form>
        <Checkbox
          isSubscribing={this.state.isSubscribing}
          changeisSubscribing={this.changeisSubscribing}
        />
        <input type="submit" value="Registrera" />
        <br />
      </div>
    );
  }
}

export default UserRegistration;
