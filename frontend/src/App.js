import React from "react";
import Login from "./Login";
import UserRegistration from "./UserRegistration";
import StartPage from "./StartPage";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userName: "",
      isLoggedIn: false,
      isSubscribing: false,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState(
      { isSubscribing: this.state.isSubscribing ? false : true },
      () => this.props.changeisSubscribing(this.state.isSubscribing)
    );
  };

  isLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  };

  isLoggedOut = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    if (this.state.isLoggedIn === true)
      return (
        <div className="App">
          <header className="App-header">
            <h1>Nyhetsbrevet</h1>
            <StartPage
              ChangeisSubscribingStatus={this.state.isSubscribing}
              isLoggedOut={this.isloggedOut}
            />
          </header>
        </div>
      );
    else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Nyhetsbrevet</h1>
            <Login isLoggedIn={this.isloggedIn} />
            <br />
            <UserRegistration
              UserRegistration={this.UserRegistration}
              isLoggedIn={this.isloggedIn}
            />
          </header>
        </div>
      );
    }
  }
}
