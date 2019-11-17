# Component Lifecycle

Only available in class based components

- constructor()
- getDerivedStateFromProps()
- getSnapshotBeforeUpdate()
- componentDidCatch()
- shouldComponentUpdate()
- componentDidUpdate()
- componentDidMount()
- componentWillUnmount
- render()

## Component Creation life cycles

1. constructor(props). You have to call super(props) in the constructor
    - Basic init/set initial state
    - DON'T cause side effects (send HTTP, store in browser cache)
2. getDerivedStateFromProps(props, state). Very niche use case, likely to not use
    - Sync state
    - DON'T cause side effects (send HTTP, store in browser cache)
3. render()
    - Prepare and structure JSX code
4. componentDidMount(). Runs after all hooks and child component life cycle hooks have completed
    - DO cause side effects (http calls etc).
    - DON'T update state.

## Component Update life cycles

1. getDerivedStateFromProps(props, state).
    - Sync state to props
    - DON'T cause side effects (send HTTP, store in browser cache)
2. shouldComponentUpdate(nextProps, nextState). Allows you to cancel the updating process. Should be used very carefully
    - Decide whether to continue or not
    - DON'T cause side effects (send HTTP, store in browser cache)
3. render()
4. Update all child components, each one will run it's own life cycle.
5. getSnapshotBeforeUpdate(prevProps, prevState). Used for last minute DOM ops, not necessarily changes (like scroll location)
6. componentDidUpdate(). Signals that life cycle is completed.
    - Here you would make a http request, but be careful not to get stuck in an infinite loop
    - DON'T update state