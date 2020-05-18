import React from 'react';
import MyCanvas from './Canvas/MyCanvas'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: new Date().getTime()};
  }

  componentDidMount() {
    fetch("/api/users")
    .then(response => response.json())
    .then(json => this.setState({ data: json.is }));
  }

  render() {
    return (
      <div id="app">
        <h3>React Client Status ok</h3>
        <h3>Node Server Status {this.state.data}</h3>
        <MyCanvas />
      </div>
    );
  }
}

export default App;
