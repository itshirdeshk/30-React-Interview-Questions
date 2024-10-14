import React, { useState } from 'react'

function Thirteen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    const handleAuth = () => {
        if (isRegistered) {
            const user = users.find((u) => u.email === email && u.password === password);
            console.log(user);

            if (user) {
                setIsLoggedIn(true);
            } else {
                alert('Login Failed');
            }
        } else {
            const newUser = { email, password };
            setUsers([...users, newUser]);
            setIsLoggedIn(true);
        }
    }

    const handleLogout = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    }
    return (
        <div>
            {
                isLoggedIn ? (
                    <div>
                        <h2>Welcome, {email}</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>{isRegistered ? 'Login' : 'Register'}</h2>
                        <form>
                            <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={handleAuth}>{isRegistered ? 'Login' : 'Register'}</button>
                        </form>
                        <p>
                            {isRegistered ? "Don't have an account? Register now" : "Already have an account? Login now"}
                            <button onClick={(e) => setIsRegistered(!isRegistered)}>{isRegistered ? 'Register' : 'Login'}</button>
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default Thirteen