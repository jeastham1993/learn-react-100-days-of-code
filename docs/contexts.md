# Contexts

If you want to pass a property from App.js, to a child and then to another child below that you can do that by passing the this.props down each level. However, this can get cumbersome.

A middle component may receive a property, but doesn't really care about it. Leads to extra reduncancy and just cluttered code.

## Context

State can be passed in multiple components using context. Can pass from component A to component D, but skipping components B & C. 

A context is a globally available JS object.

``` js

import React from 'react';

const authContext = React.createContext({
	authenticated: false,
	login: () => {}
});

export default authContext;

```

## Using Context

In React 16.6 there is a simple way to use context. In class based components a special static property can be added called contextType. 

``` js

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
    this.inputElementRef.current.focus();
  }

   render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
      </Aux>
    );
  }
}

```

In function based components, there is a React hook named useContext with a similar function.

``` js

import React, {
  useEffect,
  useRef,
  useContext
} from 'react'
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

   return ( 
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={paragraphClasses.join(' ')}>This is really working!</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      {<button onClick={authContext.login}>Login</button>}
      
    </div>
  )
}

```

Once created it should be imported as a component. The AuthContext component should then wrap all elements of the application that will need access to it.

``` js

<AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
  {this.state.showCockpit ? (
    <Cockpit
      login={this.loginHandler}
      title={this.props.appTitle}
      showPersons={this.state.showPersons}
      personsLength={this.state.persons.length}
      clicked={this.togglePersonsHandler}
    />
  ) : null}
  {persons}
</AuthContext.Provider>

```

To then use the context within a component, the required components should be wrapped in AuthContext.Consumer.

AuthContext.Consumer takes a function that has a single argument -> context. Context then contains properties for all set up in the auth-context file.

``` js

return ( 
	<div className={classes.Cockpit}>
	  <h1>{props.title}</h1>
	  <p className={paragraphClasses.join(' ')}>This is really working!</p>
	  <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
	    Toggle Persons
	  </button>
	  <AuthContext.Consumer>
	  	{(context) => <button onClick={context.login}>Login</button>}
	  </AuthContext.Consumer>
	  
	</div>
)

````

