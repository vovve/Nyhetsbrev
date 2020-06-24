import React from "react";

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName: "", userEmail: "", userPassword: "", isSubscribing: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
  
  handleSubmit(event) {
    console.log("Tryckte på registrera knappen");
    this.props.UserRegistration(
      this.state.userName,
      this.state.userEmail,
      this.state.userPassword,
      );
      event.preventDefault();
    }

  handleChange(event) {
    const name = event.target.name;
  
      this.setState({
          [name]: event.target.value
      });
    }

  render() {
    //const showText = this.props.showText;
    return (
      <div className="Loginbox">
        <h3>Registrera dig här</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Namn:
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            </label>
            <br />
            <label>
            Email:
            <input
              type="email"
              name="userEmail"
              value={this.state.userEmail}
              onChange={this.handleChange}
            />
            </label>
            <br />
            <label>
            Lösenord:
            <input
              type="password"
              name="userPassword"
              value={this.state.userPassword}
              onChange={this.handleChange}
            />
            </label>
            <br />
          <input type="submit" value="Registrera"/>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default UserRegistration;
