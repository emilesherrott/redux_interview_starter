# Redux

Some example React code to help teach people Redux

## Using this repo

- `git clone` to have a copy of the code locally 
- `npm i` to install dependencies
- `npm run dev` to bundle and load the application 


## Redux in a nutshell

### Actions:

Actions are plain JavaScript objects that describe an intention to change the state.
They have a type property indicating the type of action and can include additional payload data.

### Reducers:

Reducers are pure functions that specify how the state should be updated based on the received actions.
They take the current state and an action as inputs and return a new state.
Reducers should not mutate the existing state but instead create a new state object.

### Store:

The store is a single source of truth that holds the application state.
It is created with the createStore function from Redux, passing in the root reducer.

### Dispatch:

Actions are dispatched to the store using the dispatch method.
Dispatching an action triggers the root reducer, which updates the state accordingly.
Subscriptions:

Components can subscribe to the store using the connect function or React hooks like useSelector.
Subscribed components will be notified whenever the relevant state they depend on changes.
Updates and Re-renders:

When the state is updated, connected components receive the updated state and may re-render.
Redux uses a diffing algorithm to determine which components should re-render, optimizing performance.
Middleware (optional):

Redux middleware sits between the dispatching of an action and the moment it reaches the reducer.
Middleware allows intercepting actions, performing additional logic, and even dispatching new actions.
It enables features like logging, asynchronous operations, and more.
By following this cycle, Redux ensures a predictable flow of data and helps manage complex application states efficiently.
