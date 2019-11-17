# Project Structure

What goes into each file, and where to split components down?

Analyze components, and look at what they are doing. The below component displays a single person, and handles the click event of that person. It is extremely focused.

``` js

const person = (props) => {

const rnd = Math.random();

    if (rnd > 0.7)
    {
        throw new Error('Something went wrong');
    }

return (
    <StyledDiv>
        <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
)
}

export default person;

```

However, there are still things that could be outsourced.

- The input: Maybe a generic input component is required across the whole app
- The paragraphs: Maybe a custom p wrapper, that gives a default styling/behaviour. If it's mainly styling, just do it in the App.css

Looking at the render method below however, there are lots of things doing on. 

``` js

render() {
    let persons = null;
    let btnClass = [classes.button];

    if (this.state.showPersons) {
      console.log(classes.Red);
      btnClass.push(classes.Red);

      persons = ( <div> {
        this.state.persons.map((person, index) => {
          return <ErrorBoundary key = {    person.id
          }>
              <Person
            click = {
              () => this.deletePersonsHandler(index)
            }
            name = {
              person.name
            }
            age = {
              person.age
            }
            changed = {
              (event) => this.nameChangedHandler(event, person.id)
            }
            />
          </ErrorBoundary>
        })
      } </div>);
    }

    let paragraphClasses = [];

    if (this.state.persons.length <= 2){
      paragraphClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1)
    {
      paragraphClasses.push(classes.bold);
    }
    
    return ( 
      <div className = {classes.App} >
       <h1> Hi, I 'm a React app</h1>  
        <p className={paragraphClasses.join(' ')}>This is really working.</p>  
        <button className={btnClass.join(' ')} alt={this.state.showPersons} onClick = {
          this.togglePersonsHandler
        }
        >Toggle persons</button> 
        {
          persons
      } 
      </div>
  );
}

```

Typically, components that manage state and logic should NOT be concerned with rendering UI. The render method should be very lean, and not contain too much JSX. 

For example, it might make sense to create a 'Persons' component that can be passed a list of Persons and render the repeater. 

It's good practice, if rendering a list of a component, to put the singular component within the folder for the list. 

- Parents
    - Parent
        - Parent.js
    - Parents.js

It can also be useful to group all the components into one folder, as things like images may be added to an assets folder. 

It can also be useful to have a containers folder, which can hold any outer layers (App.js etc..).

- components
    - Parents
        - Parent
            - Parent.js
        - Parents.js
- assets
    - logo.png
- containers
    - App.js
    - App.css
    - App.test.js

Containers should be the only things concerned with state, and then import lots of dumb components which render the UI. 

Some containers may not even need a CSS file, as all of the styling is handled by the imported components.