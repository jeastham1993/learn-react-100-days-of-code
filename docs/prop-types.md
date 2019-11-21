# Prop Types

You can, in a component, give information about the expected props and their respective types. 

``` console

npm install --save prop-types

```

To use, first import PropTypes from 'prop-types'.

Before exporting a component, you then set the PropTypes property detailing a JS object. The object contains key value pairs with the name of the property and the data types

``` js

import PropTypes from 'prop-types';

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);

```