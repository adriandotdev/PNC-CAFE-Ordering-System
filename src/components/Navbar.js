import React from 'react'
import ShoppingCart from '../component-icons/ShoppingCart'
import Dropdown from '../component-icons/Dropdown'

function Navbar() {
    return (
        <nav className="navbar bg-pnc p-5 navbar-start w-full flex items-center justify-between sticky top-0 lg:fixed">
            <h1 className="text-white font-bold md:text-3xl">PNC Cafe</h1>
            
            <section className="">

                <ShoppingCart />
                <Dropdown />
            </section>
        </nav>
    )
}

export default Navbar
