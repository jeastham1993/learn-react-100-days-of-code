# Planning an app

There are three steps to design a React app:

1. Component tree / component structure. After getting a design, how should that be split into components. What should go into it's own component?
2. Application state (Data). What data is used/manipulated within the application? What state is required?
3. Components vs containers. Once the components and state is understood, things can be split into stateless (dumb) and stateful (smart).

## Component tree / component structure

The best way to do this, can be using a hierarchial Visio/Flow diagram.

1. What should users be able to do? What is the purpose of the application? Basic UI Design and look. This would normally come from a designer.
2. Once all the questions have been answered, it can then be split down into components.

App component -> Layout component -> Toolbar & Sidedrawer & Backdrop & { props.children } -> 

Top level app component
Below that, a layout component
Below that, there are potentially four different components. A toolbar, a sidebar, a backdrop and then the rendered 'page'.

### Toolbar

- Drawer toggle
- Logo
- Navigation

### Sidedrawer

- Navigation (potentially shared with the toolbar)
- Logo (potentially shared with the toolbar)

### Backdrop

- Simple HTML code, could be used to dim the page if a model popup appears

### {props.children}

Contains all different pages

- Burger builder. This should contain Burger building controls & Preview Burger Component & Modal which shows a checkout screen

#### Burger Builder

- Burger building controls. BuildControl[] & Order Button
- Preview burger component. Ingredient[]
- Modal. Wrapper component which just renders props.children. That way it is completely re-usable.

## Planning the state

After identifying the layout, the required state is the next step. This is important, because it helps to determine stateful vs stateless.

So, for a burger buider. What should be managed:

- Ingredients = { meat: 1, cheese: 2, salad: 0}
- Purchased = true/false
- TotalPrice = decimal

Now, where should the state be managed. In this instance, all of the required state items are only really related to building a burger. Therefore, the state should be managed in the Burger Builder component.

It may seem a sensible idea to manage state in app.js, but if parts of your application don't care about the state items it's not useful to do that. Remember, there should be as little stateful components as possible.
