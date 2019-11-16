import React, {
  Component
} from 'react';
import classes from './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [{
        id: 1,
        name: 'James',
        age: 26
      },
      {
        id: 2,
        name: 'Vicki',
        age: 25
      },
      {
        id: 3,
        name: 'Fred',
        age: 25
      },
    ],
    someOtherProperty: 'hello'
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;
    let btnClass = [classes.button];

    if (this.state.showPersons) {
      console.log(classes.Red);
      btnClass.push(classes.Red);

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
}

export default App;