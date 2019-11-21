# Higher Order Components

Higher order components (HOC) or basically components that simply wrap other components.

Used if adjacent elemtents are reuired, without wanting to render an extra real element to the DOM.

``` js

import React from 'react';

const aux = props => props.children;

export default aux;

````

In React 16.2, this can be replaced with <React.Fragment></React.Fragment>

Another good example of Higher Order Components is if a div is created that has a class name, as a wrapper.

``` js

<div className="Persons"></div>

```

``` js

import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent/>
    </div>
  );
};

export default withClass;


```

The above could be used:

``` js

export default withClass(Persons, classes.person);

```

This will work fine, but causes issues when using properties in the WrappedComponent. To pass properties through the higher order component, simply send the props using the spread operator syntax.

``` js

import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent props={...props}/>
    </div>
  );
};

export default withClass;

````
