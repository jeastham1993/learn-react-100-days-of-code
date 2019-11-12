# Understanding JSX
The returned 'HTML' by the render method isn't actually HTML. It is JSX.

An example of JSX, can be seen in the below code. The 'HTML' and the React.createElement both return exactly the same DOM representation.

``` js
import React, { Component } from 'react';
import './MyCustomComponent.css'

class MyCustomComponent extends Component {
    render(){
        //return {
            //<div className="MyCustomComponent">
            //    <h2>Look a custom component</h2>
            //</div>
        //}
        return React.createElement('div', {className: 'MyCustomComponent'}, React.createElement('h1', null, 'Look a custom component'))
    }
}

export default MyCustomComponent

```

This is why JSX is used, as it's much easier to write. Underneath, it all compiles down to React.createElement code.

## Restrictions

### Keywords

Some keywords are restricted when writing JSX. For example

```js

<div class="MyCustomComponent">
</div>

```

Will not compile because 'class' is a keyword in javascript. That is why className is used instead. When compiled, className is changed to class.

### Root Elements

Returned JSX should always be wrapped in a single root element. The below has been allowed in React 16, but is generally considered bad practice.

``` js
class MyCustomComponent extends Component {
    render(){
        return {
            <div className="MyCustomComponent">
                <h2>Look a custom component</h2>
            </div>
            <div>
            </div>
        }
    }
}
```
