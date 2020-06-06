import React from "react";
import "./App.css";

class ShowLogin extends React.Component {
  render() {
    const showLoginText = this.props.loginText;
    return (
      <div className="LoginBox">
        <div>{showLoginText}</div>
      </div>
    );
  }
}

export default ShowLogin;
