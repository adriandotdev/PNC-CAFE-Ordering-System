import React from 'react'
import {Link} from 'react-router-dom'

// This is the sidebar menu for the admin page.
function Sidebar() {
    return (
        <div className="max-h-min flex flex-wrap justify-center w-screen gap-5 p-3 shadow-md mb-3 lg:mb-0 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4 lg:grid-flow-row lg:max-w-min lg:place-content-start lg:full">

            <Link to="/admin/transactions" className="admin-sidebar-btn w-28">Transactions</Link>
            <Link to="/admin/users" className="admin-sidebar-btn w-28">Users</Link>
            <Link to="/admin/menu" className="admin-sidebar-btn w-28">Menu</Link>
        </div>
    )
}

export default Sidebar