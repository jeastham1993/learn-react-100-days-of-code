import React, {
    Component
} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] get derived state from props');

        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] should component update');

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] get snapshop before update');

        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] Component did update', snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
                return ( <
                    Person key = {
                        person.id
                    }
                    click = {
                        () => this.props.clicked(index)
                    }
                    name = {
                        person.name
                    }
                    age = {
                        person.age
                    }
                    changed = {
                        (event) => this.props.changed(event, person.id)
                    }
                    /> )
                })
        }
    }

    export default Persons;