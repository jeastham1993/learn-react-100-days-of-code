# Class based vs functional components

## Class based

Extends Component from React

- In class based state and props are accessed using this. 

## Functional

Is simple a function, that returns some JSX code.

- props is passed as an argument.

## Differences

In React 16.8 and higher, the difference is minimal. The only thing not supported in functional components is lifecycleHooks. However, in older project versions state management can only be done in class based.

## When? 

If using a version of React that doesn't support React Hooks, then this an easy question. Manages state = class based, otherwise functional.

In React 16.8 or above, it can still be useful to keep a clear distinction by still using class based and functional as a distinction.

Props can be passed into App.js from Index.js. This can be useful for things like application titles, metadata etc.