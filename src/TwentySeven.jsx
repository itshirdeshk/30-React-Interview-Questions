import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TwentySeven() {
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => setData1(res.data)
        ).catch((err) => console.error(err))
        axios.get('https://jsonplaceholder.typicode.com/posts/2').then((res) => setData2(res.data)).catch((err) => console.error(err))
    }, [])

    return (
        <div>
            <h2>Title 1: {data1.title}</h2>
            <h2>Title 2: {data2.title}</h2>
        </div>
    )
}

export default TwentySeven