import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function AdminPage() {

    return (
        <div className="main-content-admin lg:h-full lg:sticky">
            
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default AdminPage
