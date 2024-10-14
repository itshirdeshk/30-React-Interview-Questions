import React, { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1 >= 0 ? state.count - 1 : 0
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            }
    }
}

function TwentyOne() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count: {state.count}</h3>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default TwentyOne