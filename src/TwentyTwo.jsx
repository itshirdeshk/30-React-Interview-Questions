import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react'

function taskReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state, { id: Date.now(), text: action.payload, completed: false }
            ]
        case 'REMOVE_TASK':
            return state.filter((todo) => todo.id !== action.payload)
        case 'UPDATE_STATUS':
            return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
    }
}

function TwentyTwo() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [todoText, setTodoText] = useState('');

    const addTask = () => {
        dispatch({ type: 'ADD_TASK', payload: todoText });
        setTodoText('');
    }

    const removeTask = (id) => {
        dispatch({ type: 'REMOVE_TASK', payload: id })
    }

    const changeStatus = (id) => {
        dispatch({ type: 'UPDATE_STATUS', payload: id })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type='text' placeholder='Add new task' onChange={(e) => setTodoText(e.target.value)} value={todoText} />
            <button onClick={() => addTask()}>Add</button>
            <h2>Your Todos:</h2>
            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}><span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}><b>Todo:</b> {task.text}</span> <input checked={task.completed} type='checkbox' onChange={() => changeStatus(task.id)} /> <button onClick={() => removeTask(task.id)}>Remove</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default TwentyTwo