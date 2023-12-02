// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count === 200) {
      this.setState(prevState => {
        console.log(`prev number is ${prevState.count}`)
        return {count: 200}
      })
    } else {
      this.setState(prevState => {
        console.log(`prev number is ${prevState.count}`)
        return {count: prevState.count + 10}
      })
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => {
        console.log(`prev number is ${prevState.count}`)
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        {/* <div className="sub-container"> */}
        <h1 className="sub-heading">Speed is {count}mph</h1>
        <p className="des">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-button"
            onClick={this.onIncrement}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="brake-button"
            onClick={this.onDecrement}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
