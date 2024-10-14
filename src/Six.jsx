import React, { useState } from 'react'

const Six = () => {
    const [title, setTitle] = useState('');
    const handleButton = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTitle(json.title));
    }
    return (
        <>
            <button onClick={handleButton}>Show Todo</button>
            <h3>{title}</h3>
        </>
    )
}

export default Six