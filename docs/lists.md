# Lists

In other frameworks, a directive is used.

``` js

*ngFor

```

However, as React is just JS standard javascript is used.

The map functions allows us to run a piece of code on every method within an array, the item of the array is 'mapped' to the return value of a function.

``` js

state = {
    persons: [
        {name: 'James', age: 26},
        {name: 'Vicki', age: 25},
        {name: 'Fred', age: 25},
    ],
    someOtherProperty: 'hello'
}

<div>
    {this.state.persons.map(person => {
    return <Person 
        name={person.name} 
        age={person.age}
    />
    })}
</div>

```

## Managing the state of lists

The map function always returns a second argument, the index of the list. 

``` js

deletePersonsHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);

    this.setState({
        persons: persons
    });
}

{this.state.persons.map((person, index) => {
    return <Person 
    click={() => this.deletePersonsHandler(index)}
    name={person.name} 
    age={person.age}  
    />
})}

```

Doing this is fine, but there is a flaw. Objects and arrays are reference types, so splicing mutates the original array as well. It can give really unpredictable results and is best practice.

A better practice, is to create a copy before manipulating. A good way is to use slice, or if ES6 a spread operator.

``` js

deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
        persons: persons
    });
}

```

### State should always be changed in a immutable fashion. The original should never be mutated

## Lists and Keys

When rendering lists of data, we should always use a key property. A key property is a default property React expects by default. The key property helps React update the list efficiently.

Not using a key is VERY in-efficient.

``` js

 state = {
    persons: [{
        name: 'James',
        age: 26
      },
      {
        name: 'Vicki',
        age: 25
      },
      {
        name: 'Fred',
        age: 25
      },
    ],
    someOtherProperty: 'hello'
  }

return <Person
    click = {
        () => this.deletePersonsHandler(index)
    }
    name = {
        person.name
    }
    age = {
        person.age
    }
    key = {person.id} 
    />

```
