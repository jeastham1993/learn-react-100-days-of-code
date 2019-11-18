# Cleaning Up

If using a class based component, the componentWillUnmount lifecycle hook can be used to run cleanup work.

``` js

componentWillUnmount(){
    console.log('[Persons.js] component will unmount'); 

    // Run some cleanup
}

```

In functional components, the same work can be added using a return from useEffect().

``` js

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

```

Cleanup work in use effect will be seen when the component is removed.