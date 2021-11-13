import React from 'react'
import {Outlet} from 'react-router-dom'
import ShoppingCart from '../component-icons/ShoppingCart'
import Dropdown from '../component-icons/Dropdown'

function Navbar({navClass}) {
    return (
        <div className={navClass}>
            <nav className="nav navbar bg-pnc p-5 navbar-start w-full flex items-center justify-between">
                <h1 className="text-white font-bold text-2xl md:text-3xl">PNC Cafe</h1>
                
                <section className="">

                    <ShoppingCart />
                    <Dropdown />
                </section>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
