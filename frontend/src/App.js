import React from "react";
import Login from "./Login";
import UserRegistration from "./UserRegistration";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      showText: "",
      isLoggedIn: false
    };
  }

  UserRegistration = (userName, userEmail, userPassword) => {
    var data = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword
    };

    fetch("http://localhost:3000/userRegistration", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .catch((err) => {
        console.log(err);
      });
  };

    isLoggedIn = () => {
      this.setState({ isLoggedIn: true });
    }

    isLoggedOut = () => {
      this.setState({ isLoggedIn: false });
    }

  render() {
    return (
      this.state.isLoggedIn ?
      <div className="App">
        <header className="App-header">
          <h1>Nyhetsbrevet</h1>
            <div>
            <Login 
            ChangeisSubscribingStatus = {this.changeisSubscribingStatus} 
            isLoggedOut={this.isloggedOut}
            />
            </div>
        </header>
      </div>
            :
            <div className="App">
            <header className="App-header">
              <h1>Nyhetsbrevet</h1>
                <div>
            <UserRegistration 
            UserRegistration={this.UserRegistration} 
            isLoggedIn = {this.props.isloggedIn}
            />
           </div>
        </header>
      </div>
    );
  }
}

export default App;
