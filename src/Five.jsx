import React, { useState } from 'react'

function Five() {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <label>
                <input type='checkbox' onChange={() => setToggle(!toggle)} />
            </label>

            <p>{toggle ? 'On' : 'Off'}</p>
        </div>
    )
}

export default Five