import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100)

    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state
    let num
    if (count % 2 === 0) {
      num = 'Even'
    } else {
      num = 'Odd'
    }
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="para1">Count is {num}</p>
          <button onClick={this.getRandomNum} type="button" className="btn">
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
