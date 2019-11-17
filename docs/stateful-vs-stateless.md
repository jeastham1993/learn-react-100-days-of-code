# Stateful vs Stateless Components

It's good practice to create as many stateless (dumb) components as possible. Mainly because they have no internal logic or are presentation components. 

There should only be a small number of Stateful (smart/container) components. This keeps the app easy to maintain, gives a clear flow of data and also makes it easy to find out where to change the logic.

If every component managed it's own state, it quickly becomes spaghetti where everything is trying to manage it's own internals. Be very conscious about where stateful/smart/container components are used.

## Stateful

Used when managing state. Does not automatically mean class based, just means it manages it's own state in some way. However, before React hooks were introduced in 16.8 class based was the only way to manage state. 

## Stateless/Presentational/Dumb

Historically, always been functional components. There should be LOTS of these. Functional components that do NOT manage state.

Always think WHY, before starting to manage state in a component.