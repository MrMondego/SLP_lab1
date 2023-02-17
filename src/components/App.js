import '../css/App.css';
import React from 'react';
import Stock from './Stock'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let currDate = new Date(this.state.time);
    return (<main>
      <h1>{currDate.toString()}</h1>
      <Stock />
    </main>)
  }
  
}

export default App;
