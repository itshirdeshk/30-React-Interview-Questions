import React, { useState } from 'react'
import './styles/Eighteen.css';

function Eighteen() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
                ≡
            </button>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}

export default Eighteen