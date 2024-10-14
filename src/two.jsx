import React, { useState } from 'react'

function Two() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    )
}

export default Two