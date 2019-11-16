# CSS Modules

CSS Modules is another way of managing styles. It allows the moving of styles into CSS files, but still controlling when they are imported. 

Dynamic styles are handled simply by having seperate css classes.

If using react scripts version run, you can run

``` console

npm run eject

```

This exposes all the config/scripts that react uses under the hood to build/pack projects. Be very careful tweaking this.

To enable CSS modules, in the webpack.config.dev.js change:

``` json

require.resolve('style-loader'),
{
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
    },
}

```

to

``` json

require.resolve('style-loader'),
{
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
    },
}

```

Once that is added, the styles can be used by importing the css file as something, and accessing the classes using props of the imported object.

``` js

import classes from './App.css';

class App extends Component {

    return ( 
        <div className = {classes.App} >
        <h1> Hi, I 'm a React app</h1>  
            <p className={paragraphClasses.join(' ')}>This is really working.</p>  
            <button className={classes.button} alt={this.state.showPersons} onClick = {
            this.togglePersonsHandler
            }
            >Toggle persons</button> 
            {
            persons
        } 
        </div>
    );

}

```