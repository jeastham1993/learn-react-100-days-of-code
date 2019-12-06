# Routing

Routing is being able to show different pages to the user, most apps have more than one page.

Multiple pages in an SPA though?

An SPA is defined as a single HTML, whilst still giving different 'pages' and different URLs. But instead of needing different HTML pages, parts of the page are rendered differently based on the path.

Routing in React is managed by a 3rd party package not developed by Facebook named React Router.

``` console

npm install --save react-router react-router-dom

```

## Getting Started

To start using routing, the entire app should be wrapped in a BrowserRouter element imported from the react-router-dom package.

``` js

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


```

## Using routes

To actually use a route, first the Route component should be imported from react-router-dom. The component can then be used, with a little bit of config, to conditionally render. 

``` js

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;

```

The Route component takes a path and the JSX to be rendered (this can just be an arrow function).

The exact keyword, tells React router to either exactly match the path or use 'starts with'. In the above example, for route / the posts and the h2 will always render. For new-post, the h2 and the h1 will render.

When rendering a component, the component keyword should be used instead of render.

## Holding state between route changes

When using Routes in their basic form, the page is reloaded every time and therefore the state is changed. Instead, the Link component can be used from react-router.

Links should always be used INSTEAD of a tags

``` js

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;

```

## Route Props

When using react router, a set of props are added to the default props object. These include information on the path matched, query strings and hash matches passed when configuring the Link.

This can be used to extract query params OR extract hash locations.

There is also a history object which contains methods to navigate around or find out exactly where we are at.

Routing props are not passed down the component tree automatically. There are two ways to get access:

The spread operator could be used from the parent, along with this.props

``` js

{...this.props}

```

There is also a HOC called withRouter which can also be used. withRouter simply wraps the export and this makes the component route aware.

``` js

import React from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';

const post = (props) => {
    console.log(props);

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

export default withRouter(post);

```

## Absolute vs Relative routes

When using the Link component and 'to' you cannot control if is an absolute or relative path, it is always an absolute path. 

If a relative path is required, it can only be used by creating the path dynamically.

``` js

<li><Link to={{
    pathname: this.props.match.url + '/new-post',
    hash:'#submit',
    search: '?quick-submit=true'
}}>New Post</Link></li>

```

## Styling links

For styling an active link, the Link component is switched out for a NavLink component. This adds an 'active' css class to the currently active component. Exact is important in the same way it is for routing.

The name of the active class can also be overriden using the activeClassName property.

``` js

import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        

        return (
            <div className="Blog">
                <header>    
                    <nav>
                        <ul>
                            <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;

```

## Dynamic Route Parameters

To pass a dynamic route parameter, the : syntax can be used. 

``` js

<Route path="/:id" exact component={FullPost}/>

```

## Multiple matching routes

If there are multiple potentially conflicting routes, as in the below snipper, the Switch component can be used to control.

``` js

<Switch>
    <Route path="/" exact component={Posts}/>
    <Route path="/new-post" component={NewPost}/>
    <Route path="/:id" exact component={FullPost}/>
</Switch>

```

Switch will ensure only a single route gets rendered. React-router analyses the wrapped routes in order, and once a match is found that is returned and the analysis stops. 

Routes can be combined both within and outside of a Switch statement.