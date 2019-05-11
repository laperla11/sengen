import React, { Component } from "react";
import SentenceMaker from "./SentenceMaker.js";
import Button from "./Button.js";
import getRandomWord from "./getRandomWord.js";

const secondSlot = [
  "beatiful",
  "embarassed",
  "angry",
  "urban",
  "kind",
  "cheeky",
  "shy",
  "brave"
];
const thirdSlot = [
  "mouse",
  "monkey",
  "surgeon",
  "ghost",
  "panda",
  "monster",
  "puppy",
  "kitten"
];
const fourthSlot = [
  "bewitched",
  "clothed",
  "stole",
  "tasted",
  "barrowed",
  "tasted",
  "cursed"
];
const sixthSlot = [
  "rain-soaked",
  "ghostly",
  "uncollaborative",
  "hallucinatory",
  "excitedly",
  "sadly",
  "happily"
];
const seventhSlot = ["galaxy", "party", "song", "spell", "moon", "pool", "car"];

const slots = [
  "",
  secondSlot,
  thirdSlot,
  fourthSlot,
  "",
  sixthSlot,
  seventhSlot,
  "."
];

export default class SentenceGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "The",
      second: null,
      third: null,
      fourth: null,
      fifth: "the",
      sixth: null,
      seventh: null,
      eight: "."
    };
  }

  componentDidMount() {
    this.generateSen();
  }

  generateSen = () => {
    const second = getRandomWord(secondSlot);
    const third = getRandomWord(thirdSlot);
    const fourth = getRandomWord(fourthSlot);
    const sixth = getRandomWord(sixthSlot);
    const seventh = getRandomWord(seventhSlot);
    this.setState({
      second: second,
      third: third,
      fourth: fourth,
      sixth: sixth,
      seventh: seventh
    });
  };

  render() {
    return (
      <div style={divStyle}>
        <SentenceMaker words={Object.values(this.state)} allWords={slots} />
        <Button generateSen={this.generateSen} />
      </div>
    );
  }
}

const divStyle = { display: "flex", justifyContent: "space-between" };
