import React from 'react';
import Person from'./Person/Person';

const persons = (props) => props.persons.map((person, index) => {
        return <Person
        key = {
            person.id
        }
        click = {
            () => props.clicked(index)
        }
        name = {
            person.name
        }
        age = {
            person.age
        }
        changed = {
            (event) => props.changed(event, person.id)
        }
        /> 
    })


export default persons;