import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <Person name="James" age="26"/>
        <Person name="Vicki" age="25"/>
        <Person name="Fred" age="25">My hobbies: fishing</Person>
      </div>
    );
  }
}

export default App;
