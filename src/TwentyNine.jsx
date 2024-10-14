import React, { useReducer } from 'react'

const initialState = {
    currentImageIndex: 0
}

function imageReducer(state, action) {
    switch (action.type) {
        case 'PREVIOUS':
            return {
                ...state,
                currentImageIndex: state.currentImageIndex - 1
            }
        case 'NEXT':
            return {
                ...state,
                currentImageIndex: state.currentImageIndex + 1
            }
    }

}

const images = [
    'https://images.unsplash.com/photo-1521714161819-15534968fc5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww',
    'https://media.istockphoto.com/id/1364370202/photo/a-man-cosplaying-the-famous-marvel-comic-character-spiderman-during-the-carnival-parade-along.jpg?s=612x612&w=0&k=20&c=IGjcJ7U2quDXqe2J8sFWxzsRypcFilT20B9Toc2RT3o=',
    'https://media.istockphoto.com/id/1255788082/photo/person-in-spider-man-costume-shows-the-victory-sign.jpg?s=612x612&w=0&k=20&c=ThvtHIAElXluQFZfZXI7ky6rTmX2Sb-9jKrCUEr-wl0=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3bUaS8l6dqvWwCv-BkjjKQq_DCPxc0ueIA&s',
]
function TwentyNine() {
    const [state, dispatch] = useReducer(imageReducer, initialState);

    return (
        <div>
            <img src={images[state.currentImageIndex]} width={'100px'} height={'100px'}/>
            <button onClick={() => dispatch({ type: 'PREVIOUS' })} disabled={state.currentImageIndex === 0}>Previous</button>
            <button onClick={() => dispatch({ type: 'NEXT' })} disabled={state.currentImageIndex === images.length - 1}>Next</button>
        </div>
    )
}

export default TwentyNine