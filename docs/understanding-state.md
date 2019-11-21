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

## How NOT to use State

When using setState, an update cycle is not immediatly triggered. Instead, it schedules the state update and re-render, which runs when the resources are available. Typically that is instant, but not guaranteed.

If you had a counter in the state object, that needed to be updated. You could do this

``` js

this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 });


````

this.state, in this instance is not guaranteed to be the most up to date state.

The better way to do this is:

``` js

this.setState((prevState, props) => {
   return { 
    persons: persons,
    changeCounter: prevState.changeCounter + 1
    } 
  });

````

When updating state directly based on previous state, you can pass an arrow function to the setState method. In there, the prevState is passed as a property and this is guaranteed to be the correct state.
