import React, { Component } from "react";
import Login from "./components/auth/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> welcome React</h1>
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
