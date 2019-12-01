import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from '../../axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
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

    render () {
        let posts = <p>Something went wrong!</p> 
        
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id} 
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClickedHandler(post.id)}
                    />
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;