import React from "react";

class StoreLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loginString: this.props.dataFromParent };
  }
  componentDidMount() {
    this.doLogin(this.props.loginString);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.loginString != this.props.loginString) {
      this.doLogin(nextProps.loginString);
    }
    return true;
  }

  doLogin(login) {
    console.log("Login: ", login);

    fetch("http://localhost:3000/users/userId", {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        console
          .log(data.responseData.loginString)
          .this.setState({ loginString: data.responseData.loginString })
          .this.props.loginString(data.responseData.loginString);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="LoginBox">
        <div>{this.props.loginString}</div>
      </div>
    );
  }
}

export default StoreLogin;
