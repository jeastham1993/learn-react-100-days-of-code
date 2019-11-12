# 100 Days of Code - Learning React
As part of a 100 days of code challenge, I'm going to be working through the https://www.udemy.com/course/react-the-complete-guide-incl-redux Udemy course on React.

## Build Workflow
### Why?
1. Optimize Code
2. Use next-gen features across as many browsers as possible
3. Be More Productive

### How?
1. Use a dependency management tool npm or yarn
2. Use a bundler to combine many files together into a single file - Webpack
3. Use a compiler - compile javascript to translate modern features into things that will work on all browsers. Babel
4. Use a development server - Use a local web server

## Create React App
[https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

### Getting started

``` console
npm install create-react-app -g
create-react-app react-complete-guide --scripts-version 1.1.5
```

## Understanding folder structure
### package.json
Holds specific dependencies and the required versions.
It also holds a set of scripts that can be ran with npm 'scriptname'

### node_modules
Holds all actual dependencies, should never need to manipulate and npm install will populates

### public
Holds files exported to the public web server. Index.html is the SINGLE page for the application.
This is where the script files will get injected by the build workflow.
The div with the id root is where the react application gets mounted.
CSS/JS/Meta tags are added in the index.html as well.

### src
This is the actual react application. Yhe majority of code will be added to App.js OR any newly created components

#### index.js 
Important as it actually renders the react application.

#### index.css
Apply global styles here

#### registerServiceWorker.js
Allows to add a service worker

#### App.test.js
Allows creation of tests.