import React, { useState } from 'react'

function Eight() {
    const [todo, setTodo] = useState('');
    const [showTodo, setShowtodo] = useState('');
    const addTodo = () => {
        setShowtodo(todo);
        setTodo('')
    }

    const removeTodo = () => {
        setShowtodo('')
    }

    return (
        <div>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <button onClick={removeTodo}>Remove</button>

            <h2>Your Todo:</h2>
            <p>{showTodo}</p>
        </div>
    )
}

export default Eight