# Navigation Guards

Guards can be used to block a user who is not authenticated. They are really easy to implement in React. 

As all the routes within an application are simply Components, the Route component can just be conditionaly rendered based on a piece of state. 

If the Route component isn't rendered, then that route cannot be accessed.

``` js

import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    state = {
        auth: false
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
                        this.state.auth === true ? <Route path="/new-post" component={NewPost}/> : null
                    }
                    <Route path="/posts" component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;

```