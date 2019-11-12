# Two Way Model Binding
Using an input as an example, we can bind the input changing to a change of the state. With React, an input has an onChange event. A function is passed in from the parent that is then used by the onChange event. 

The initial state of the input can also be set by simply setting the value property to be props.name

``` js

import React from 'react';
    
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;

```

When the Person component is used, a function is passed in to the changed event. In this case nameChangedHandler. Every time the input changes, the nameChangedHandler event runs and updates the first persons name to be whatever is typed.

``` js

class App extends Component {

  state = {
    persons: [
      {name: 'James', age: 26}
    ],
    someOtherProperty: 'hello'
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 26}
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  } 
}

export default App;

```