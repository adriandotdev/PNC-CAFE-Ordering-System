import React, {useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import {Link} from 'react-router-dom'
import Button from '../components/Button'

// This is the dropdown menu for user.
function Dropdown() {

    const {isUser, setUser, setQuantity} = useContext(UserContext)
    return (
        <>
            <div  className="dropdown dropdown-hover dropdown-end">

                <button className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <ul className="menu dropdown-content w-32 rounded mr-1 z-10 bg-pncHover transition-all shadow-2xl">

                    {/* Profile Button - This will link to profile page. */}
                    {isUser && <Link to="" className="btn-block focus:border-none hover:bg-pnc p-2 font-medium transition-all text-white text-center">Your Orders</Link>}

                    {/* Menu Button - it will point to homepage */}
                    <Link to="/homepage" onClick={() => setQuantity(1)} className="text-center btn-block focus:border-none hover:bg-pnc p-2 font-medium transition-all text-white">Menu</Link>

                    {/* About Button */}
                    <Button className="btn-block hover:bg-pnc p-2 font-medium transition-all text-white" text="About"/>

                    {/* Logout button - Logout the current logged account */}
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
