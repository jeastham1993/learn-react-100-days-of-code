import React, {
  Component
} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

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
    someOtherProperty: 'hello',
    showCockpit: true
  }

  componentDidUpdate() {
    console.log('[App.js] component did update...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] should component update...');

    return true;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.userId === id;
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
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = ( <
        Persons persons = {
          this.state.persons
        }
        clicked = {
          this.deletePersonsHandler
        }
        changed = {
          this.nameChangedHandler
        } >
        <
        /Persons>
      );
    }

    return ( <
      div className = {
        classes.App
      } >
      <button onClick={() => {this.setState({showCockpit: false})}}>Remove cockpit</button>
      {this.state.showCockpit ? <
      Cockpit title = {
        this.props.applicationTitle
      }
      showPersons = {
        this.state.showPersons
      }
      personsLength = {
        this.state.persons.length
      }
      clicked = {
        this.togglePersonsHandler
      }
      /> : null} {
        persons
      } <
      /div>
    );
  }
}

export default App;