const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type){
        case 'INCREMENT':
            newState.counter = newState.counter + 1;
            
            return newState;

        case 'DECREMENT':
            newState.counter = newState.counter - 1;
            
            return newState;
    
        case 'ADD':
            newState.counter = newState.counter + action.value;
            
            return newState;

        case 'SUBTRACT':
            newState.counter = newState.counter - action.value;
            
            return newState;
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'REMOVE_RESULT':
            const updatedArray = state.results.filter(element => {
                if (element.id === action.key){
                    return false;
                }
                else
                {
                    return true;
                }
            });

            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
}

export default reducer;