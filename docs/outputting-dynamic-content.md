# Outputting Dynamic Content

Dynamic code is executed by wrapping in single curly braces.

``` js

import React from  'react';

const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
}

export default person;

```

Instead of having a simple one line piece of JS code, you can also run a function within the curly braces.
