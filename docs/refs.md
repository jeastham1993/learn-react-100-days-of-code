# Refs

Refs basically mirror the functionality of standard JS on query selectors. However, query selectors are bad because they just find the first element. A repeating set of inputs will always get the first input found on the page.

On any JSX object, not simply inputs. A ref keyword can be added. 

``` js

componentDidMount() {
	this.inputElement.focus();
}

<input
  key="i3"
  ref={(inputEl) => {
    this.inputElement = inputEl
  }}
  type="text"
  onChange={this.props.changed}
  value={this.props.name}
/>

```

Using ref, you can set a new property on the whole class based component to be equal to the element. NOTE, in the above example inputEl and this.inputElement could be named anything.

The property can then be used in the componentDidMount lifecycle hook to do something. In the above case, it focuses the input.

Alternatively, this can also be done in the constructor since React 16.3.

``` js

constructor() {
	super();
	this.inputElementRef = React.createRef();
}

componentDidMount() {
	this.inputElementRef.current.focus();
}

<input
  key="i3"
  ref={this.inputElementRef}
  type="text"
  onChange={this.props.changed}
  value={this.props.name}
/>

```

## Using Refs in functional components

It's possible, since React hooks were introduced in 16.8 to use ref in React hooks.

``` js

import React, {
  useEffect,
  useRef
} from 'react'

const toggleButtonRef = useRef(null);

useEffect(() => {
	toggleButtonRef.current.click();

	return () => {
	  
	}
}, [])

return ( 
    <div className={classes.Cockpit}>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  )

```