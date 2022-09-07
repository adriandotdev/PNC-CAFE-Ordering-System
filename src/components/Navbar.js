import React from 'react'
import {Outlet} from 'react-router-dom'
import ShoppingCart from '../component-icons/ShoppingCart'
import Dropdown from '../component-icons/Dropdown'
import {UserProvider} from '../contexts/UserContext'
import {CheckoutProvider} from '../contexts/CheckoutContext'
import ProfileIcon from '../component-icons/ProfileIcon'

function Navbar({navClass}) {

    return (
        <UserProvider>
            
            <CheckoutProvider>
                <div className={navClass}>

                    <div className="relative">
                        <nav className="nav navbar bg-pnc p-5 navbar-start w-full flex items-center justify-between fixed top-0 z-10">
                            <h1 className="text-white font-bold text-2xl sm:block md:text-3xl">PNC Café</h1>
                            
                            <section className="flex gap-5">

                                <ShoppingCart />
                                <ProfileIcon />
                                <Dropdown />
                            </section>
                        </nav>
                     </div>
                    

                    {/* Other Pages to be rendered (E.g. UserLoginPage, UserSignupPage) */}
                    <Outlet />
                </div>
            </CheckoutProvider>
        </UserProvider>
    )
}

export default Navbar
