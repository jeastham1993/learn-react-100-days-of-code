# useEffect() in Functional Components

useEffect is the second most important React Hook. All the life cycle hooks are covered in this one React Hook.

You could run a HTTP request in here. It's componentDidMount and componentDidUpdate in one hook.

``` js

import React, {
  useEffect
} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] Use effect...');
  })
}

```

## Controlling Behavior

A second argument can be added to useEffect that allows the controlling of when the hook runs. That is done, by passing an array of all the data objects that are required to cause an update.

The below code would only run when the persons property changes.

Multiple useEffect blocks can be used for different properties.

Passing an empty array causes it to run the first time, but then never run again.

``` js

useEffect(() => {
    console.log('[Cockpit.js] Use effect...');

    // Run a HTTP request

    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000)
  }, [props.persons])

```
