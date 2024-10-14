import React, { useEffect, useReducer } from 'react'
const itemsPerPage = 5;

function paginationReducer(state, action) {
    switch (action.type) {
        case 'SET_TOTAL_ITEMS':
            return {
                ...state, totalItems: action.payload
            }
        case 'SET_NEW_PAGE':
            return {
                ...state, currentPage: action.payload
            }
    }
}

function TwentyThree() {
    const [paginationState, dispatch] = useReducer(paginationReducer, {
        currentPage: 1,
        totalItems: 0
    })
    const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`)

    useEffect(() => {
        dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
    }, [data]);

    const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedItems = data.slice(startIndex, endIndex);

    const handlePageClick = (newPage) => {
        dispatch({ type: 'SET_NEW_PAGE', payload: newPage })
    }

    return (
        <>
            <div>Pagination</div>
            <ul>
                {displayedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageClick(paginationState.currentPage - 1)} disabled={paginationState.currentPage === 1}>Previous</button>
                <button onClick={() => handlePageClick(paginationState.currentPage + 1)} disabled={endIndex >= data.length}>Next</button>
            </div>
        </>
    )
}

export default TwentyThree