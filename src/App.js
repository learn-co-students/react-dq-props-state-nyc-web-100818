import React, { Component } from "react";
import MasterHog from "./MasterHog";
import "./App.css";

// App component is responsible for:
// 1. Rendering the MasterHog component

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MasterHog />
      </div>
    );
  }
}
