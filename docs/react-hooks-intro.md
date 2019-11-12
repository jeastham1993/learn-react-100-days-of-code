# React Hooks Introduction

React Hooks were introduced in 16.8 and allow state to be added to functional components. For any older projects, and for some future projects, hooks may not be used so it's better to learn the established way first.

Here is a version of App.js using standard components and state, and then the same thing translated to React hooks

``` js

class App extends Component {

  state = {
    persons: [
      {name: 'James', age: 26},
      {name: 'Vicki', age: 25},
      {name: 'Fred', age: 25},
    ],
    someOtherProperty: 'hello'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'John', age: 26},
        {name: 'Vicki', age: 26},
        {name: 'Fred', age: 25},
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: fishing</Person>
      </div>
    );
  }
}

export default App;

```

## With Hooks
You no longer need to import Component, instead you can import a variety of hooks. In this case, useState.

useState allows the initialization of your state using an object as a parameter. It also always returns two parameters, the current state and a function to update the state. Using the method to update the state will cause the DOM to re-render. 

Array destructuring can be used to pull out the two parameters to be used seperately.

When setting state with React hooks, the method to set the state replaces the current state completely instead of merging.

``` js

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name: 'James', age: 26},
            {name: 'Vicki', age: 25},
            {name: 'Fred', age: 25},
        ],
        someOtherProperty: 'hello'
    });

    const switchNameHandler = () => {
      setPersonsState({
        persons: [
          {name: 'John', age: 26},
          {name: 'Vicki', age: 26},
          {name: 'Fred', age: 25},
        ] 
      })
    }

    return (
        <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: fishing</Person>
        </div>
    );
}

export default app;

```
