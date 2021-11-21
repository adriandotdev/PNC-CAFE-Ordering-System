import React from 'react'
import Button from '../components/Button'

// This is the dropdown menu for user.
function Dropdown({isUser, setUser}) {
    return (
        <>
            <div  className="dropdown dropdown-hover dropdown-end">
                <button className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul className="menu dropdown-content w-32 rounded mr-1 z-10 bg-pncHover transition-all shadow-2xl">

                    {/* Menu Button */}
                    <Button className="btn-block focus:border-none hover:bg-pnc p-2 font-medium transition-all text-white" text="Menu"/>

                    {/* About Button */}
                    <Button className="btn-block hover:bg-pnc p-2 font-medium transition-all text-white" text="About"/>

                    {/* Logout button */}
                    {isUser && <Button onClick={
                                        () => {
                                            setUser(false)
                                            window.sessionStorage.setItem('isUser', 'false');
                                            window.sessionStorage.setItem('idNumber', '');
                                            window.location.replace('http://localhost:3000')
                                        }}       
                                        className="btn-block hover:bg-pnc p-2 font-medium transition-all text-white" 
                                        text="Logout"/>}
                </ul>
            </div>
        </>
    )
}

export default Dropdown
