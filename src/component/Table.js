import React from 'react'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

const Table = () => {
    const data = useLocation();
    console.log(data)
    return (
        <>
            <Navbar />
            <div>Table</div>
        </>
    )
}

export default Table