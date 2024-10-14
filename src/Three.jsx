import React, { useState } from 'react'

const Three = () => {
    const [name, setName] = useState('');
    return (
        <div>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

            <h2>Your Name: {name}</h2>
        </div>
    )
}

export default Three