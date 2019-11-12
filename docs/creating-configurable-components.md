# Creating configurable components

By default, a single variable is passed into a component by react. That variable is named props and in code, it is advised to refer to this as props.

## Function Based Components

``` js

import React from 'react';

const person = (props) => {
    return <p > I 'm a {props.name} and I am {props.age} years old!</p>
}

export default person;

```

props will hold all of the attributes passed in.

## Class Based Components

When using class based components, this.props is used instead.

``` js

import React from 'react';

class Person extends Component {
  render() {
    return (
      return <p > I 'm {this.props.name} and I am {this.props.age} years old!</p>
    );
  }
}

export default Person;

```

## Children

It's also possible to pass out data that is passed in between the custom components tags. So

``` js

<Person name="Fred" age="25">My hobbies: fishing</Person>

```

can be parsed using

``` js

import React from 'react';

const person = (props) => {
    return (
        <div>
            <p> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;

```
