# HTTP

Could use XMLHttpRequest, however constructing http requests from scratch can be a little tedios. 

There is a 3rd party library named axios which hides away a lot of that complication

``` console

npm install axios

```

## Where to make requests?

componentDidMount is the best place to run http requests.

## GET Requests

GET requests run async, so assigning them to a variable won't work. Axios uses promises, which allows the use of the .then() function;

``` js

componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({posts: response.data});
        });

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title}/>
        });
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

```

## Post Request

``` js

postDataHandler = () => {
    const post = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
    }
    axios.post('https://jsonplaceholder.typicode.com/posts',  post)
        .then(response => {
            console.log(response);
        })
}

```

## Dealing with errors

As well as chaining the .then block after a request, the .catch block can also be chained. This can be used to catch any erroring server calls and do something specific with them.

``` js

axios.get('https://jsonplaceholder.typicode.com/postsasdad')
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

```

## Adding interceptors with Axios

Methods that get executed for every single request. Useful for auth and handling errors globally.

``` js

axios.interceptors.request.use(request => {
    console.log(request);

    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);

    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

```

## Request/Response defaults 

Normally in the index.js, default settings can be added.

``` js

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
axios.defaults.headers.post["Content-Type"] = 'application/json';

```

Defaults can also be set up on an instance by instance basis, instead of having a single global instance. This can be useful for common settings that may need to be shared between different baseURL's.