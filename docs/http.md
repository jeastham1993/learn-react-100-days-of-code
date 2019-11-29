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
