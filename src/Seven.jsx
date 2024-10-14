import React, { useEffect, useState } from 'react'

function Seven() {
    const [time, setTime] = useState(20);
    useEffect(() => {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        }
    }, [time])
    return (
        <div>Time Left: {time}</div>
    )
}

export default Seven