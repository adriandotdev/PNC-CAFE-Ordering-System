import React from 'react'
import {Outlet} from 'react-router-dom'
import Tab from '../components (admin)/Tab'

function AdminPage() {

    return (
        <div className="main-content-admin lg:h-full lg:sticky">
            
            <Tab />

            {/* This will render the page for user, transaction, and menu table */}
            <Outlet />
        </div>
    )
}

export default AdminPage
