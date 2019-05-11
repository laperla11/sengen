import React, { Component } from "react";
import "./App.css";
import SentenceGenerator from "./SentenceGenerator.js";

export default class App extends Component {
  render() {
    return (
      <div style={divStyle}>
        <div className="App">Sentence Generator</div>
        <SentenceGenerator />
        <SentenceGenerator />
        <SentenceGenerator />
        <SentenceGenerator />
      </div>
    );
  }
}

const divStyle = {
  width: "600px",
  margin: "10px auto"
};
