import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import "./App.css";

class App extends Component {
  state = {
    userName: "dipweb"
  };

  eventHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment - 1</h1>
        <hr />
        <UserInput userName={this.state.userName} changed={this.eventHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
