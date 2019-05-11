import React, { Component } from "react";
import getRandomWord from "./getRandomWord.js";

export default class Word extends Component {
  constructor(props) {
    super(props);
    this.state = { randomWord: "" };
  }

  selectWord = () => {
    const newWord = getRandomWord(this.props.slotWords);
    this.setState({ randomWord: newWord });
  };

  render() {
    return (
      <span
        onClick={this.selectWord}
        style={{ background: this.props.wordStyle, cursor: "pointer" }}
      >
        {this.state.randomWord || this.props.content}
      </span>
    );
  }
}
