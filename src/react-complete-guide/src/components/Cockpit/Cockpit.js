import React, {
  useEffect
} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] Use effect...');

    // Run a HTTP request

    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);

    return () => {
      console.log('[Console.js] cleanup work in use effect');
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] second use effect...');

    return () => {
      console.log('[Console.js] cleanup work in second use effect');
    }
  });

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  let paragraphClasses = [];

  if (props.personsLength <= 2) {
    paragraphClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    paragraphClasses.push(classes.bold);
  }

  return ( <div className = {classes.Cockpit} >
    <
    h1 > {
      props.title
    } < /h1>   <
    p className = {
      paragraphClasses.join(' ')
    } > This is really working. < /p>   <
    button className = {
      btnClass
    }
    alt = {
      props.showPersons
    }
    onClick = {
      props.clicked
    } >
    Toggle persons < /button>  <
    /div>
  )
}

export default React.memo(cockpit);