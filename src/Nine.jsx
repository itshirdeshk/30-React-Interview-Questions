import React, { useState } from 'react'

const Nine = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const handleOnClick = () => {
        backgroundColor === 'white' ? setBackgroundColor('yellow') : setBackgroundColor('white');
    }
    return (

        <div
            onClick={handleOnClick}
            style={{
                backgroundColor,
                height: "400px",
                width: "400px",
                cursor: 'pointer'
            }}>Click me to change the color</div>
    )
}

export default Nine