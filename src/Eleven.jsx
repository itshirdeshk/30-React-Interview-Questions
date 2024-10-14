import React, { useEffect, useState } from 'react'

function Eleven() {
    const jokes = [
        'Why do programmers prefer dark mode? Because light attracts bugs!',
        " Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
        "What's the first step in understanding Recursion? To understand recursion, you have to first understand recursion.",
        "Why do programmers prefer dark chocolate? Because it has fewer bugs."
    ]
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const index = Math.floor(Math.random() * jokes.length);
        setJoke(jokes[index]);
    }, [])
    return (
        <div>Joke: {joke}</div>
    )
}

export default Eleven