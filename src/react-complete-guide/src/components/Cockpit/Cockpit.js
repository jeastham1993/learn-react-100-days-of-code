import React, {
  useEffect,
  useRef
} from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {

  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] Use effect...');

    toggleButtonRef.current.click();

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

  return ( 
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={paragraphClasses.join(' ')}>This is really working!</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
      {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
      
    </div>
  )
}

export default React.memo(cockpit);