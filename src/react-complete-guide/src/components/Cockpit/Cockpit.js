import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    let btnClass = '';

    if (props.showPersons)
    {
        btnClass = classes.Red;
    }

    let paragraphClasses = [];

    if (props.persons.length <= 2){
      paragraphClasses.push(classes.red);
    }

    if (props.persons.length <= 1)
    {
      paragraphClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1> Hi, I 'm a React app</h1>  
            <p className={paragraphClasses.join(' ')}>This is really working.</p>  
            <button className={btnClass} alt={props.showPersons} onClick = {
            props.clicked
            }
            >Toggle persons</button> 
        </div>
    )
}

export default cockpit;