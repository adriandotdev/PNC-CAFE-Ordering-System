import React from 'react'
import {Outlet} from 'react-router-dom'
import ShoppingCart from '../component-icons/ShoppingCart'
import Dropdown from '../component-icons/Dropdown'

function Navbar({navClass, isUser, setUser}) {
    return (
        <div className={navClass}>

            <div className="relative">
                <nav className="nav navbar bg-pnc p-5 navbar-start w-full flex items-center justify-between fixed top-0 z-10">
                    <h1 className="text-white font-bold text-2xl md:text-3xl ">PNC Cafe</h1>
                    
                    <section className="">

                        { isUser && <ShoppingCart /> }
                        <Dropdown isUser={isUser} setUser={setUser}/>
                    </section>
                </nav>
            </div>
            

            {/* Other Pages to be rendered (E.g. UserLoginPage, UserSignupPage) */}
            <Outlet />
        </div>
    )
}

export default Navbar
