import React from "react";
//import Login from "./Login";
//import UserRegistration from "./UserRegistration";

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userPassword: "",
      isLoggedIn: this.props.isLoggedIn,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("kryssar i vill prenumrera");
    event.preventDefault();
    const { userId } = this.state;
    console.log(userId);

    // var data = { isSubscribing: changeisSubscribingstatus };

    // fetch("http://localhost:3000/users/" + userId, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     if (response != null) {
    //       this.props.sendUserStatus(
    //         response.id,
    //         response.userName,
    //         response.isSubscribing,
    //         this.setState({ isLoggedIn: false })
    //       );
    //       alert("update was successful");
    //     } else alert("update was unsuccessful");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  changeisSubscribingstatus = (isSubscribingstatus, userId) => {
    console.log(
      "Ändrar prenumerationsstatus. Status är: ",
      isSubscribingstatus
    );
  };

  render() {
    return (
      <div className="Loginbox">
        Jag vill prenumerera på nyhetsbrevet
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="checkbox"
              onChange={this.handleChange}
              value={this.state.isSubscribing}
            />
            <button type="submit">Confirm and Logout</button>
          </label>
        </form>
      </div>
    );
  }
}
