# Stateful vs Stateless Components

It's good practice to create as many stateless (dumb) components as possible. Mainly because they have no internal logic or are presentation components. 

There should only be a small number of Stateful (smart/container) components. This keeps the app easy to maintain, gives a clear flow of data and also makes it easy to find out where to change the logic.

If every component managed it's own state, it quickly becomes spaghetti where everything is trying to manage it's own internals. Be very conscious about where stateful/smart/container components are used.