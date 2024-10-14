import React from 'react'
import { useAuth } from './context/AuthContext'

function TwentyFour() {
    const { user, login, logout } = useAuth();
    return (
        <div>
            <h1>User Authentication</h1>
            <div>
                {user === null ? <button onClick={() => login({ username: 'Hirdesh' })}>Login</button> : <>
                    <p>Welcome, {user.username}</p>
                    <button onClick={() => logout()}>Logout</button>
                </>}
            </div>
        </div>
    )
}

export default TwentyFour