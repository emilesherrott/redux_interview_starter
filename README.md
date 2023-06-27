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



## Why people like Redux

**Centralized State Management**: Redux provides a centralized store, making it easier to manage and access application state from various components.

**Predictable Data Flow**: Redux enforces a unidirectional data flow, making it simpler to understand and reason about how data changes throughout the application.

**Time-Travel Debugging**: Redux's design enables time-travel debugging, allowing developers to replay and track state changes, making debugging more efficient.

**Scalability and Complex Applications**: Redux's structure and patterns make it suitable for large-scale applications with complex state management needs, providing organization and maintainability.

**Thriving Ecosystem**: Redux has a strong community and a vast ecosystem of middleware, tools, and extensions, which enhances its capabilities and offers additional resources for developers.

Overall, Redux offers a robust and widely adopted solution for managing application state, providing developers with control, predictability, and efficient debugging capabilities.


## useContext or Redux

The choice between useContext and Redux depends on the specific requirements and complexity of the application. useContext is preferable in smaller applications or cases where the state management needs are relatively simple. It is lightweight, built into React, and allows components to access specific data without passing props through multiple levels. useContext shines when there is a smaller amount of shared state or when the state updates are localized within a few components. On the other hand, Redux is more suitable for larger applications or those with complex state management needs. It provides a centralized store, allowing for better organization and access to state across the application. Redux offers powerful features like time-travel debugging, middleware support, and a thriving ecosystem, making it beneficial for scalability, maintainability, and advanced state management scenarios. Ultimately, the decision should consider the size, complexity, and future growth of the application.
