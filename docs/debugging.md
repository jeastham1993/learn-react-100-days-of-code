# Debugging

## Understanding error messages

If looking at an error in the console, always scroll right to the top. This will give you a message, and also an indication of where the error occurred.

Event if the message itself is cryptic, you should always get a line number and method which will be helpful.

## Finding logical errors

More often than not, logical errors are more common. There aren't any errors, but things still don't work as expected.

In the below code, there is no property named userId. However, as it is perfectly ok to compare undefined to something the code will not error. 

``` js

const personIndex = this.state.persons.findIndex((p) => {
    return p.userId === id;
});

```

Open chrome developer tools and go to the sources tab. In there, you can see the code, add breakpoints and step through like using Visual Studio.

Debugging can also be done using a VS Code plugin called Chrome Developer Tools. (https://code.visualstudio.com/docs/nodejs/reactjs-tutorial).

## Error Boundaries 

In React 16 the concept of Error Boundaries was added. ErrorBoundaries are higher order components that can be used to wrap another component and return a friendly message. Kind of like a try catch.

Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.

The Error boundary can return a custom message. 

``` js

import React, {
    Component
} from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    // Runs whenever a component within this component errors
    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render(){
        if (this.state.hasError){
            return <h1>Uh oh! Something went wrong.</h1>
        }
        else {
            // This is important, as this renders the contents of the error boundary if there are no errors.
            return this.props.children;
        }
    }
}

export default ErrorBoundary;

```

It is important that this.props.children is returned if there is no error, as this returns the actual contents of the ErrorBoundary. 

And to use

``` js

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

return <ErrorBoundary key = {    person.id
    }>
        <Person
    click = {
        () => this.deletePersonsHandler(index)
    }
    name = {
        person.name
    }
    age = {
        person.age
    }
    changed = {
        (event) => this.nameChangedHandler(event, person.id)
    }
    />
    </ErrorBoundary>

```

The render method of the error boundary can then be used to return a custom error message of some kind, instead of the actual exception throw by the application.

When running in debug, the normal error screen is still displayed.