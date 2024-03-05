// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  OnIncrement = () => {
    const randNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randNum}))
  }

  render() {
    const {count} = this.state
    let countStatus
    if (count % 2 === 0) {
      countStatus = 'even'
    } else {
      countStatus = 'odd'
    }

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="count">Count {count}</h1>
          <p className="count-status">Count is {countStatus}</p>
          <button className="btn" type="button" onClick={this.OnIncrement}>
            Increment
          </button>
          <p className="caution">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
