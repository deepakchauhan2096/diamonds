import React from 'react'
import Home from './Home'
import { useLocation, useNavigate } from 'react-router-dom'

const Table = () => {
    const data = useLocation();
    console.log(data)
    return (
        <>
            <Home />
            <div>Table</div>
        </>
    )
}

export default Table