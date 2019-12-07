# Lazy Loading

## React Suspense (16.6 only)

If using React 16.6 or above React lazy can be used. 

Using React suspense is very simiar to using an asyncComponent, but the methods are built into React.

Constants are creating using React.lazy() and then added to the route wrapped in the Suspense component.

``` js

import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';

const NewPost = React.lazy(() => {
    return import('./NewPost/NewPost');
});

const Posts = React.lazy(() => {
    return import('./Posts/Posts');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>    
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Posts</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" render={() => <Suspense fallback={<div>Loading...</div>}><NewPost/></Suspense>}/>
                    <Route path="/posts" render={() => <Suspense fallback={<div>Loading...</div>}><Posts/></Suspense>}/>
                    <Route path="/" render={() => <Suspense fallback={<div>Loading...</div>}><Posts/></Suspense>}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;

```

## Manual Lazy Loading

Lazy loading can be used to only download the code for a requisite component and it's children when it is accessed.

When first implementing lazy loading, you first need a HOC called asyncComponent. The code within is standard.

``` js

import React, { Component } from 'react'

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render () {
            const C = this.state.component;

            return C ? <C {...this.props}/> : null
        }
    }
}

export default asyncComponent;


```

From there, the way the route is created then needs to be changed to used this new asyncComponent.

The import of the required component is removed, and instead imported as a function passed to the asynComponent. The AsyncNewPost constant is then used in the Router config INSTEAD of the NewPost component. 

``` js

import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';

// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        

        return (
            <div className="Blog">
                <header>    
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Posts</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {
                        this.state.auth === true ? <Route path="/new-post" component={AsyncNewPost}/> : null
                    }
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;

```