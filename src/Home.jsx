import React, { useEffect } from 'react'

function Home() {
    useEffect(() => { document.title = 'Home' })
    return (
        <div>Home</div>
    )
}

export default Home