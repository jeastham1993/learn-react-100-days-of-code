# Creating Simple Components

The convention is to create components with a capital first letter (Person), and create a folder with src for each component.

Within the folder, create a file with the name of the component (Person.js).

If creating a simple component, it can be created with a simple function instead of creating a class that extends Component.

Instead of:

``` js

import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p>Hi, I'm a person</p>
      </div>
    );
  }
}

export default Person;

```

Can use:

``` js

import React from  'react';

const person = () => {
    return <p>I'm a Person!</p>
}

export default person;

```

## Using a custom component

The custom component should be imported. It's important to import with a uppercase first letter to ease confusion between JSX (HTML, div, p... etc) and custom components.

``` js

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <Person/>
      </div>
    );
  }
}

export default App;
```

## Outputting Dynamic Content
