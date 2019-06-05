import * as React from 'react';
import CounterOutput from './CounterOutput';

// interface IAppProps {

// }

interface IAppState {
  counterValue: number;
}

class App extends React.Component<{}, IAppState> {
  public state = {counterValue: 0}
  private incHandle = () => {
    this.setState(prevState => {
      return {counterValue: prevState.counterValue + 1}
    })
  }
  private decHandle = () => {
    this.setState(prevState => {
      return {counterValue: prevState.counterValue - 1}
    })
  }
  public render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <CounterOutput counter={this.state.counterValue} />
        <button onClick={this.incHandle}>Increment</button>
        <button onClick={this.decHandle}>Decrement</button>
      </div>

    )
    }
}

export default App;
