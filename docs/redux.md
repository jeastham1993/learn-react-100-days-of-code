# Redux

```console
npm install --save redux
npm install --save react-redux
```

## What is state?

- Things added to the UI that need to held/persisted?
- Is the user authenticaed?
- UI State... Is a modal open, should it be open, should the backdrop show?
- A list of blog posts?

## What makes state complicated?

React is great at reacting to state and changes, but isn't fantastic at managing it. When it comes to moving parameters between components, there is no easy way aside from passing as query parameters.

## So what is Redux?

Redux allows the global management of application state. It is a central place to manage state. Picture it as a giant js object.

### Actions

Redux has actions. Actions are dispatched from the component with a description and optionally, a payload. It's a package of information that is sent out into the app. It doesn't directly update the store, it's just a messenger.

### Reducers

Reducers handle actions and interact with the store. They manage the description/payload of the action and adding that into the store.

Multiple reducers can be combined together.

### Subscriptions

Subscriptions are what write back to the components. A component will and get notified whenever a specific part of the state is updated.

```js
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// An action will ALWAYS have a type property, this can be used to handle different
// logic
const rootReducer = (currentState = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...currentState,
      counter: currentState.counter + 1
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...currentState,
      counter: currentState.counter + action.value
    };
  }

  return currentState;
};

// Store
const store = createStore(rootReducer); // When creating a store a reducer must be passed

// Subscriptions are added using a function. A subscription runs whenever an action is dispatched
// Normally, subscriptions are setup right after creating the store
store.subscribe(() => {
  console.log("[SUBSCRIPTION]", store.getState());
});

console.log(store.getState());

// Dispatching actions
store.dispatch({
  type: "INC_COUNTER" // Convention is to be all upper case and descriptive
});

store.dispatch({
  type: "ADD_COUNTER",
  value: 10
});

console.log(store.getState());
```

## Integrating Redux with React

Creating the store is best to happen in index.js.

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
```

#### reducer.js

```js
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducers;
```
