import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'James', age: 26},
      {name: 'Vicki', age: 25},
      {name: 'Fred', age: 25},
    ],
    someOtherProperty: 'hello'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'James', age: 26},
        {name: newName, age: 26},
        {name: 'Fred', age: 25},
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'James', age: 26},
        {name: event.target.value, age: 26},
        {name: 'Fred', age: 26},
      ] 
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('John!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}  
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Fredrick')}>My hobbies: fishing</Person>
      </div>
    );
  } 
}

export default App;
