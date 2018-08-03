import React, { Component } from 'react';

import Counter from './Counter';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
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
    const incrementProps = { text: '+', handleClick: this.incrementCount };
    const decrementProps = { text: '-', handleClick: this.decrementCount };
    const resetProps = { text: 'Reset', handleClick: this.resetCount };

    return (
      <div>
        <Counter { ...this.state } />
        <Button { ...decrementProps } />
        <Button { ...resetProps } />
        <Button { ...incrementProps } />
      </div>
    );
  }
}

export default App;
