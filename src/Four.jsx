import React from 'react'

function Four() {
    const array = [1, 2, 3, 4, 5, 6];
    return (
        array.map((value, index) => <div key={index}>{value}</div>)
    )
}

export default Four