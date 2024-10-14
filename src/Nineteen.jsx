import React from 'react'
import { useTheme } from './context/ThemeContext.jsx'

function Nineteen() {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div>
            <label>
                <input type='checkbox' checked={isDarkMode} onChange={toggleTheme} /> Dark Mode
            </label>
        </div>
    )
}

export default Nineteen