# Handling Events With Methods

[Supported React Events](https://reactjs.org/docs/events.html#supported-events)

When running events, like onClick it is important not to reference the function with () as it will cause the function to run as soon as the DOM is rendered. 

The below is bad!!

``` js

<button onClick={this.switchNameHandler()}>Switch Name</button>

```

should be 

``` js

<button onClick={this.switchNameHandler}>Switch Name</button>

```

## Passing methods to children
Methods can be passed to child components. 

They are passed in like a property, and then accessed in the child from using the props variable.

There are two options for passing a function, both of which can be seen below.

1. Using bind
2. Using an arrow function

The second option is not very performant, although it looks syntactically better. Stick to bind where possible.

``` js

switchNameHandler = (newName) => {
    this.setState({
    persons: [
        {name: newName, age: 26},
        {name: 'Vicki', age: 26},
        {name: 'Fred', age: 25},
    ]
    })
}

<Person 
    name={this.state.persons[2].name} 
    age={this.state.persons[2].age}
    click={this.switchNameHandler.bind(this, 'Fredrick')}>My hobbies: fishing</Person>

```

``` js

import React from 'react';
    
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;

```