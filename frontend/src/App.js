import React from "react";
import Login from "./Login";
import Checkbox from "./Checkbox";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startMessage: "",
      userLoggingin: "",
      isSubscribing: false,
    };
  }

  userLoggingin = (userId) => {
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
              startMessage={this.state.ShowLogin}
              userLoggingin={this.userLogginginId}
            />
          </div>
          <br />
          <Checkbox
            isSubscribing={this.state.isSubscribing}
            changeisSubscribing={this.changeisSubscribing}
          />
        </header>
      </div>
    );
  }
}

export default App;
