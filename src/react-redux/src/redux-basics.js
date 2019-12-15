const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// An action will ALWAYS have a type property, this can be used to handle different
// logic
const rootReducer = (currentState = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + action.value
        }
    }

    return currentState;
};

// Store
const store = createStore(rootReducer); // When creating a store a reducer must be passed

// Subscriptions are added using a function. A subscription runs whenever an action is dispatched
// Normally, subscriptions are setup right after creating the store
store.subscribe(() => {
    console.log('[SUBSCRIPTION]', store.getState());
});

console.log(store.getState());

// Dispatching actions
store.dispatch({
    type: 'INC_COUNTER' // Convention is to be all upper case and descriptive   
});

store.dispatch({
    type: 'ADD_COUNTER',
    value: 10
});

console.log(store.getState());