# Life cycle optimization

## When should we optimize

It might seem logical to add optimization to every single component, however this may not be a good idea.

The code executed in shouldComponentDidUpdate comes with a performance hit, albeit a small one. However, if all components are wrapped in it, then it could add up. 

If it is likely that the child will almost always be re-rendered when the parent is edited then it is better to re-render every single time.

## shouldComponentDidUpdate()

Should component update is one of the most important life cycle hooks for optimization in class based components. If a container re-renders, it may trigger a child to re-render as well when actually, nothing has actually changed that is relevant to the child.

``` js

shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] should component update');
    if (nextProps.persons !== this.props.persons) {
        console.log('[Persons.js] yes');
        return true;
    } else {
        console.log('[Persons.js] no');
        return false;
    }
}

```

## React.memo - Functional components

React.memo can be used to check if a functional component has changed, and only re-render if it does.

To use, simply wrap the export in React.memo

``` js

export default React.memo(cockpit);

```

Now, the component will only be re-rendered when any of the props used by the cockpit component or changed.

It can be good practice to always wrap a functional component in React.memo if there is a chance it may not need to re-rendered.