import React from 'react';
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
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.data}</h2>
      </div>
    );
  }
}

export default App;
