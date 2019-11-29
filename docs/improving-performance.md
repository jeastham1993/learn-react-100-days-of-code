# Improving Performance

Look for state changes that cause re-rendering. If most clicks in the application affect the layout in some way then a re-render is required. However, if some click event does not directly affect the UI there is no need to re-render.

Crucial points are:

- State changes (container components)

If a part of the application is shown conditionally (a modal for example) it is worth controlling render cycles only when it is on the screen.

Components are re-rendered even if they are not shown.

It is a good practice to handle shouldComponentUpdate() for any components that are conditionally shown.