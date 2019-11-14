# Advanced Styling

It's important to remember that things like hover cannot be added when using inline styles.

## Dynamic Styling

If style is applied inline, the 'styles' object is just a JS object with properties, these can be changed in the render method.

``` js

render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = ( <div> {
        this.state.persons.map((person, index) => {
          return <Person
          click = {
            () => this.deletePersonsHandler(index)
          }
          name = {
            person.name
          }
          age = {
            person.age
          }
          key = {
            person.id
          }
          changed = {
            (event) => this.nameChangedHandler(event, person.id)
          }
          />
        })
      } < /div>);
      style.backgroundColor = 'red';
      style.border = '1px solid red';
    }
    
    return ( <div className = "App" >
       <
        h1 > Hi, I 'm a React app</h1>  <
        p > This is really working. < /p>  
        <button style={style}
        onClick = {
          this.togglePersonsHandler
        } > Toggle persons < /button> {
        persons
      } <
      /div>
  );
}   

```

## Dynamic Classes

Classes can also be applied dynamically. The simplest way to do this is to fill an array with the required class names, and then pass to the JSX using array.join(' ')

``` js

let paragraphClasses = [];

    if (this.state.persons.length <= 2){
      paragraphClasses.push('red');
    }

    if (this.state.persons.length <= 1)
    {
      paragraphClasses.push('bold');
    }
    
    return ( <div className = "App" >
       <
        h1 > Hi, I 'm a React app</h1>  
        <p className={paragraphClasses.join(' ')}>This is really working.</p>  
        <button style={style}
        onClick = {
          this.togglePersonsHandler
        }
        >Toggle persons</button> 
        {
          persons
      } 
      </div>
  );

```

## Pseudo Selectors and Media Queries

One of the restrictions of inline styles is that you can't use pseudo selectors (:hover) or media selectors. Using a package called Radium adds that capability.

Using Radium, all pseudo selectors and media selectors are valid, but they must be wrapped in quotes as they are not valid JS property names.

``` js

const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid green',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: 'lightgreen',
        color:'black'
    }
};

```

If using media queries or keyframes the entire application needs to be wrapped in a special 'StyleRoot' component.

``` js

import Radium, {StyleRoot}  from 'radium';

 return ( 
      <StyleRoot>
        ...
      </StyleRoot>
 )

```

``` js

const person = (props) => {
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div style={style} className="Person">
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);

```
