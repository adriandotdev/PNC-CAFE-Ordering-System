import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../components (admin)/Sidebar'

function AdminPage() {

    return (
        <div className="main-content-admin lg:h-full lg:sticky">
            
            {/* Sidebar that contains the USER, TRANSACTION, AND MENU BUTTON */}
            <Sidebar /> 

            {/* This will render the page for user, transaction, and menu table */}
            <Outlet />
        </div>
    )
}

export default AdminPage
