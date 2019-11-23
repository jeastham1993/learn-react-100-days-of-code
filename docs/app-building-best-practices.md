# App Building Best Practices

## Structure
Stateful components are normally placed in a 'containers' folder and stateless in a 'components' folder.

## Layout files

You could manage the structure of the app directly from the App.js file. However it can be useful to have a separate layout component that purely manages the layout of the page. This could simply add a toolbar, a sidebar and then a main section for the bulk of the application.

The benefits of this arise in a scenario where different layouts are required in different situations.

``` js

import React from 'react';

import Aux from '../../hoc/Auxillary';

const layout = ( props ) => (
	<Aux>
		<div>Toolbar, Sidedrawer, Backdrop</div>
		<main>
			{props.children}
		</main>
	</Aux>
);

export default layout;

```

##

