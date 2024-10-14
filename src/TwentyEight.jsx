import React, { useState } from 'react'

function TwentyEight() {
    const [state, setState] = useState({
        count: 0,
        text: 'Hello World',
        active: true
    })
    return (
        <div>
            <h1>Multiple State Example</h1>
            <p>Count: {state.count}</p>
            <p>Text: {state.text}</p>
            <p>Active: {state.active ? 'True' : 'False'}</p>


            <button onClick={() => setState({ ...state, count: state.count + 1 })}>Increment</button>
            <button onClick={() => setState({ ...state, text: 'Changed the text' })}>Change Text</button>
            <button onClick={() => setState({ ...state, active: !state.active })}>Toggle Active</button>
        </div>
    )
}

export default TwentyEight