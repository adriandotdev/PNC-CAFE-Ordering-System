import React from 'react'
import Button from '../components/Button'

function Dropdown() {
    return (
        <>
            <div  className="dropdown dropdown-hover dropdown-end">
                <button className="btn hover:bg-pncHover bg-pnc">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                </button>
                <ul className="menu dropdown-content w-32 rounded mr-1 z-10 bg-pncHover transition-all shadow-2xl">
                    <Button className="btn-block hover:bg-pnc p-2 font-medium transition-all text-white" text="Home"/>
                    <Button className="btn-block hover:bg-pnc p-2 font-medium transition-all text-white" text="About"/>
                </ul>
            </div>
        </>
    )
}

export default Dropdown
