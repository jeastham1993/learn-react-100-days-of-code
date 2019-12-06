import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.module.css';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.setState({error: false});
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'James'
                    }
                })

                this.setState({posts: updatedPosts});
            })
            .catch((error) => {
                this.setState({error: true});
            });
    }

    postClickedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        let posts = <p>Something went wrong!</p> 
        
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                <Link key={post.id}  to={'/posts/' + post.id}>
                    <Post 
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postClickedHandler(post.id)}
                    />
                </Link>)
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        )
    }
}
