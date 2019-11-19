# How the DOM updates

render() doesn't actually cause a render, it is a suggestion of what should be rendereed to the DOM.

shouldComponentUpdate passed => render() is called

Before it is actually rendered, React compares the virtual DOM. It compares the current DOM to the future DOM. 

A virtual DOM, is basically HTML but in pure JS. React keeps both copies in pure JS, and compares the two when shouldComponentUpdate is passed.

It is also smart enough to only change the areas that have changed. So if only the text of a button changes, that is all that will be updated in the real DOM. 

So shouldComponentUpdate could pass, the render method could be called but the real DOM would not actually be updated.

The real DOM is only changed if there are real differences, it is very slow to update the DOM so this gives a big performance boost. 