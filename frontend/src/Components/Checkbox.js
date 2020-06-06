import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isSubscribing: this.props.isSubscribing };
  }

  handleChange = (event) => {
    this.setState(
      { isSubscribing: this.state.isSubscribing ? false : true },
      () => this.props.changeisSubscribing(this.state.isSubscribing)
    );
  };

  render() {
    const isSubscribing = this.state.isSubscribing ? "checked" : "";
    console.log("isSubscribing: ", isSubscribing);
    return (
      <div clasname="app-header">
        <form>
          Jag vill prenumerera på nyhetsbrevet:{" "}
          <input
            type="checkbox"
            onChange={this.handleChange}
            value={this.state.isSubscribing}
          />
          <br />
        </form>
      </div>
    );
  }
}

export default Checkbox;
