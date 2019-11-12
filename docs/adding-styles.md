# Adding React Styles

## Stylesheets 

Create a CSS file. Any CSS code written will ALWAYS be applied globally.

It's good practice to create a .Person CSS class and wrap everything within that.

Files are also not imported by standard, the Person.css needs to be imported into the App.js file.

When webpack processes imported CSS files it auto prefixes where required.

``` css

.Person {
    width:60%;
    margin:auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align: center;
}

```

``` js

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

```

## Inline Styles

Styles can also be added inline instead of using a CSS file, but it's preferable and cleaner to use a external file.

``` js

 render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('John!')}>Switch Name</button>
      </div>
    )
 }

```