import React from "react";
import "./App.css";
import Login from "./Login";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showLogin: "", userLogin: "" };
  }
  useNewLogin = (newUserLogin) => {
    console.log("Vi har anropat callback", newUserLogin);
    this.setState({ userLogin: newUserLogin });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Nyhetsbrevet</h1>
          <div>
            {/* <Login showLogin={this.state.showLogin} /> */}
            <Login getNewLogin={this.useNewLogin} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
