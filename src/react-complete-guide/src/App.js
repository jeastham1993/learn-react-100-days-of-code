import React, {
  Component
} from 'react';
import './App.css';
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
      } </div>);



    }

    let paragraphClasses = [];

    if (this.state.persons.length <= 2){
      paragraphClasses.push('red');
    }

    if (this.state.persons.length <= 1)
    {
      paragraphClasses.push('bold');
    }
    
    return ( 
      <div className = "App" >
       <h1> Hi, I 'm a React app</h1>  
        <p className={paragraphClasses.join(' ')}>This is really working.</p>  
        <button className="button" alt={this.state.showPersons} onClick = {
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