import React from "react";
import Login from "./Components/Login";
import UserRegistration from "./Components/UserRegistration";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startMessage: "Välkommen!",
      userLoggingin: "",
      newuserLoggingin: "",
      isSubscribing: false,
    };
  }

  userLoggingin = (userId) => {
    this.setState({ userLoggingin: userId });
    console.log("Vi har anropat callback", userId);
  };

  newuserLoggingin = (userId) => {
    this.setState({ userLoggingin: userId });
    console.log("Vi har anropat callback", userId);
  };

  changeisSubscribing = () => {
    this.setState({ isSubscribing: true });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Nyhetsbrevet</h1>
          <div>
            <Login
              startMessage={this.state.startMessage}
              userLoggingin={this.userLogginginId}
            />
            <br />
            <br />
            <UserRegistration
              newuserLoggingin={this.newuserLogginginId}
              changeStatus={this.changeisSubscribing}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
