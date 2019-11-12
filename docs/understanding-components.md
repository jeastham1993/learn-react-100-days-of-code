# Introduction
Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

Typically, a single app component is rendered in index.js. Normally this is App.js. 

This contains a single app component

## Defining
Create a class that extends Component.

It needs to have a render method, as this is what React calls. The render method HAS to return some html that will be rendered to the DOM.

The class is then exported.

``` js
import React, { Component } from 'react';
import './MyCustomComponent.css'

class MyCustomComponent extends Component {
    render(){
        return {
            <div className="MyCustomComponent">
                <h2>Look a custom component</h2>
            </div>
        }
    }
}

export default MyCustomComponent

```

## What are the benefits?

- Focused code and separated files for ease of development
- Reusable and configurable in multiple places