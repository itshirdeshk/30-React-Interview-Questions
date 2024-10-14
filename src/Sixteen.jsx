import React, { useEffect, useState } from 'react'

function Sixteen() {
    const list = ['hirdesh', 'madhav', 'yash', 'pranjal'];
    const limit = 2;
    const [page, setPage] = useState(1);

    const indexOfLastItem = page * limit;
    const indexOfFirstItem = indexOfLastItem - limit;

    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(list.length / limit); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {currentItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            {pageNumbers.map((number) => {
                return <li key={number} onClick={() => setPage(number)}>Page: {number}</li>
            })}
        </div>
    )
}

export default Sixteen