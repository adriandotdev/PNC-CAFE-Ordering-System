import React from 'react'
import Button from '../components/Button'

function Dropdown() {
    return (
        <>
            <div  className="dropdown dropdown-hover dropdown-end">
                <button className="btn hover:bg-pncHover bg-pnc border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul className="menu dropdown-content w-32 rounded mr-1 z-10 bg-pncHover transition-all shadow-2xl">
                    <Button className="btn-block focus:border-none hover:bg-pnc p-2 font-medium transition-all text-white" text="Home"/>
                    <Button className="btn-block hover:bg-pnc p-2 font-medium transition-all text-white" text="About"/>
                </ul>
            </div>
        </>
    )
}

export default Dropdown
