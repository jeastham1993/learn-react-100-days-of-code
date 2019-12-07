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