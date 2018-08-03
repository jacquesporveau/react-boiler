import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  decrementCount() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  incrementCount() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={ () => this.decrementCount() }>-</button>
        <button onClick={ () => this.resetCount() }>reset</button>
        <button onClick={ () => this.incrementCount() }>+</button>
      </div>
    );
  }
}

export default App;
