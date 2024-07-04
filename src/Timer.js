import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
      intervalId: null
    };
  }

  startTimer = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.setState(prevState => ({ timerValue: prevState.timerValue + 1 }));
      }, 1000);
      this.setState({ intervalId });
    }
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  resetTimer = () => {
    this.setState({ timerValue: 0 });
    this.stopTimer();
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="timer-container">
        <h1>Timer: {this.state.timerValue} seconds</h1>
        <div className="buttons-container">
          <button className="timer-button start-button" onClick={this.startTimer}>Start Timer</button>
          <button className="timer-button stop-button" onClick={this.stopTimer}>Stop Timer</button>
          <button className="timer-button reset-button" onClick={this.resetTimer}>Reset Timer</button>
        </div>
      </div>
    );
  }
}

export default Timer;
