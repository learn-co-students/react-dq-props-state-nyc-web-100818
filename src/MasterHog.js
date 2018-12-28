import React, { Component } from "react";
import Master from "./assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "./db.js";

// MasterHog component is responsible for:
// 1. Owns state which contains data to be passed down as props for BabyHog component
// 2. Rendering BabyHog components

export default class MasterHog extends Component {
  state = {
    eyeColor: "blue"
  };

  changeEyeColor = event => {
    this.setState({
      eyeColor: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="radio"
          name="eyeColor"
          value="blue"
          onChange={this.changeEyeColor}
        />
        Blue
        <br />
        <input
          type="radio"
          name="eyeColor"
          value="sun"
          onChange={this.changeEyeColor}
        />
        Sun
        <br />
        <input
          type="radio"
          name="eyeColor"
          value="glowing"
          onChange={this.changeEyeColor}
        />
        Glowing
        <br />
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        <ul className="hoglist">
          {offspring.map(hog => (
            <BabyHog {...hog} eyeColor={this.state.eyeColor} />
          ))}
        </ul>
      </div>
    );
  }
}
