import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {usernameInput: "", userpasswordInput: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
 
  handleSubmit(event) {
    console.log("Tryckte på logga in knappen");
    this.setState ({usernameInput: this.state.usernameInput, userpasswordInput: this.state.userpasswordInput});
    this.props.checkUser(this.state.usernameInput, this.state.userpasswordInput);
    event.preventDefault();
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  

  changeisSubscribingstatus = (isSubscribingstatus, userId) => {
    console.log("Ändrar prenumerationsstatus. Status är: ", isSubscribingstatus);

    var data= {"isSubscribing": isSubscribingstatus}
    fetch("http://localhost:3000/users/" + userId, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(err);
    });
  };



  render() {
    //const isSubscribing = this.state.isSubscribing ? "checked" : "";
    return (
      <div className="Loginbox">
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
          </label>
          <input type="submit" value="Logga in" />
          <br />
        </form>
          <br />
        <form>
          Jag vill prenumerera på nyhetsbrevet:{" "}
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isSubscribing}
          />
        </form>
      </div>
    );
  }
}

export default Login;
