import React from 'react'
import {Outlet} from 'react-router-dom'
import Button from '../components/Button'

function AdminNavbar() {
    return (
        <div className="admin-layout">
            <nav className="row-start-1 col-start-1 col-end-4 navbar flex justify-between items-center bg-pnc">
                <h1 className="text-white font-medium text-xl lg:text-3xl">PNC Cafe</h1>
                <div className="dropdown dropdown-end relative">
                    <button className="admin-button">
                        Admin
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu dropdown-content absolute top-12 z-10">
                        
                        <Button className="nav-menu-button" text="Profile"/>
                        <Button className="nav-menu-button" text="Logout"/>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default AdminNavbar
