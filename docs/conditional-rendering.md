# Conditional Rendering

As the 'HTML' in a React JS file is JSX and not actually HTML, it can simply be wrapped in curly braces and a ternary operator can be added.

An if statement cannot be used, only simple ternary operators.

## Ternary Operator

``` js
condition == true ? 'do something' : 'dont do it'
```

``` js

togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })
  }

{ this.state.showPersons ?
    <div>
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
            age={this.state.persons[2].age}>My hobbies: fishing</Person>
    </div>
    : null
}

```

This is fine to start with, but as complexity grows it can get really difficult to manage. Especially if nested statements start to appear.

However, there is a more simple way.

Whenever the DOM is re-rendered, everything inside the render() method runs again.

``` js

render() {
let persons = null;

if (this.state.showPersons){
    persons = (
        <div>
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
            age={this.state.persons[2].age}>My hobbies: fishing</Person>
        </div>
    );
}
return (
    <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <button 
        onClick={this.togglePersonsHandler}>Toggle persons</button>
        { persons }
    </div>
    );
}

```

This allows the core 'HTML' to stay simple, and the logic is outsourced elsewhere.