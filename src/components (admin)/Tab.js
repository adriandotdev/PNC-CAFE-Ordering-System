import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Tab() {

    const [activeTab, setActiveTab] = useState({

        user: true,
        menu: false,
        transaction: false
    })

    return (
        <div className="my-2 tabs row-start-2 row-end-3 col-start-1 col-end-5 w-screen">
            <Link onClick={() => {

                setActiveTab({user: true, menu: false, transaction: false})
            }} to="/admin/users" className={`text-pnc font-bold tab tab-lifted tab-bordered tab-border-2 ${activeTab.user ? "tab-active" : ""}`}>Users</Link> 

            <Link onClick={() => {

                setActiveTab({user: false, menu: true, transaction: false})
            }} to="/admin/menu" className={`text-pnc font-bold tab tab-lifted tab-bordered tab-border-2 ${activeTab.menu ? "tab-active" : ""}`}>Menu</Link> 

            <Link onClick={() => {

                setActiveTab({user: false, menu: false, transaction: true})
            }} to="/admin/menu" className={`text-pnc font-bold tab tab-lifted tab-bordered tab-border-2 ${activeTab.transaction ? "tab-active" : ""}`}>Transaction</Link>
        </div>
    )
}

export default Tab
