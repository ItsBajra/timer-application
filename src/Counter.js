import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Count: {this.state.count}</h1>
        <div className="buttons-container">
          <button className="counter-button increment-button" onClick={this.increment}>Increment</button>
          <button className="counter-button decrement-button" onClick={this.decrement}>Decrement</button>
          <button className="counter-button reset-button" onClick={this.reset}>Reset Count</button>
        </div>
      </div>
    );
  }
}

export default Counter;
