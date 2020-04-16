import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    userName: "dipweb"
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment - 1</h1>
        <hr />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
