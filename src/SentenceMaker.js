import React, { Component } from "react";
import Word from "./Word.js";

export default class SentenceMaker extends Component {
  render() {
    const { words, allWords, randomWord } = this.props;
    const wordStyles = [
      "white",
      "lightgray",
      "lightblue",
      "pink",
      "white",
      "gray",
      "lightblue",
      "white"
    ];
    return (
      <p>
        {words.map((word, i) => {
          return (
            <Word
              slotWords={allWords[i]}
              content={word}
              wordStyle={wordStyles[i]}
            />
          );
        })}
      </p>
    );
  }
}
