import React, { useState } from 'react'

function Twelve() {
    const [file, setFile] = useState(null);
    return (
        <>
            <input type='file' accept='image/*' onChange={(e) => {
                const img = e.target.files[0];
                setFile(img);
            }} />

            {file && <img src={URL.createObjectURL(file)}/>}
        </>
    )
}

export default Twelve