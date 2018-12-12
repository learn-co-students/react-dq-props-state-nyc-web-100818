import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'


export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 500,
      img: normalBaby
    }
  }

  changeWeight = (e) => {
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      switch (this.props.eyeColor) {
        case "blue":
          this.setState({
            img: BlueBaby
          });
          break;
        case "sun":
          this.setState({
            img: SunBaby
          });
          break;
        case "glowing":
          this.setState({
            img: GlowingBaby
          });
          break;
        default:
          console.log("nah bro")
      }
    }
  }


  handleWeight = (event) => {
    switch (event.target.name) {
      case "+":
        this.setState({
          weight: this.state.weight + 10
        });
        break;
      case "-":
        this.setState({
          weight: this.state.weight - 10
        });
        break;
      default:
        console.log("nah bro")
    }
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>Name: {this.props.details.name}</h1>
        <h3>Weight: {this.state.weight} kg</h3>
        <h3>Hobby: {this.props.details.name}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button name="+" onClick={this.handleWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.handleWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.state.img} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
