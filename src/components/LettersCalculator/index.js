// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {len: 0}

  userText = event => {
    const text = event.target.value
    this.setState({len: text.length})
  }

  render() {
    const {len} = this.state
    return (
      <div className="main-container">
        <div className="text-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-card">
            <label htmlFor="inputEle" className="label-ele">
              Enter the phrase
            </label>
            <input
              onChange={this.userText}
              id="inputEle"
              className="input-field"
              type="text"
              placeholder="Enter the Phrase"
            />
          </div>
          <p className="para">No.of letters: {len}</p>
        </div>
        <div className="img-card">
          <img
            className="image"
            src="
https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
