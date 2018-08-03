import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button>-</button>
        <button>reset</button>
        <button>+</button>
      </div>
    );
  }
}

export default App;
