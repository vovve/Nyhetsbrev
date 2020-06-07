import React from "react";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isSubscribing: this.props.isSubscribing };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState(
      { isSubscribing: this.state.isSubscribing ? false : true },
      () => this.props.changeisSubscribing(this.state.isSubscribing)
    );
  };

  changeStatus = (isSubscribing, userId) => {
    var data = { "isSubscribing:": isSubscribing };

    fetch("http://localhost:3000/users/" + userId, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    const isSubscribing = this.state.isSubscribing ? "checked" : "";
    console.log("isSubscribing:", isSubscribing);
    return (
      <div className="app-header">
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

export default Subscribe;
