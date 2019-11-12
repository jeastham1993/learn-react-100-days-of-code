# Understanding State

If a component has been created by extending Component, a special variable can be used called 'state'.

State is managed from within a component.

State is assigned with a js object.

State is special, because if any part of the state property is changed React will re-render the DOM.

``` js

class App extends Component {

  state = {
    persons: [
      {name: 'James', age: 26},
      {name: 'Vicki', age: 25},
      {name: 'Fred', age: 25},
    ] 
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: fishing</Person>
      </div>
    );
  }
}

export default App;

```

## Manipulating State

State should not be directly mutated, the below will not work.

``` js

this.state.persons = 'afassf'

```

Instead, setState() should be used.

When using setState, an object is passed in as a single variable. The object passed in is merged with the original state object. 

So the below code will update the persons array, but won't touch the someOtherProperty property.

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
}

```
