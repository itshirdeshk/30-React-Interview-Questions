import React, { useEffect, useState } from 'react'

function Fifteen() {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);

    const list = ['hirdesh', 'madhav', 'yash', 'pranjal'];

    useEffect(() => {
        const new_items = list.filter((item) => item.toLowerCase().includes(search));
        setItems(new_items);
    }, [search])

    useEffect
    return (
        <div>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <h3>Output: </h3>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Fifteen