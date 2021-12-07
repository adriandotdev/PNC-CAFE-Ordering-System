import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Tab() {

    /** A state which determines
     * which tab is currently active/selected. */
    const [activeTab, setActiveTab] = useState({

        user: true,
        menu: false,
        transaction: false,
        orders: false
    })

    return (
        <div className="my-2 tabs tabs-boxed row-start-1 row-end-2 col-start-1 col-end-5 w-screen">

            <TabItem activeTab={activeTab} setActiveTab={setActiveTab} linkRef={"/admin/users"} 
                tabItemText={"Users"} newActiveTab={{user: true, menu: false, transaction: false, orders: false}} tabName={"user"}/>
            <TabItem activeTab={activeTab} setActiveTab={setActiveTab} linkRef={"/admin/menu"} 
                tabItemText={"Menu"} newActiveTab={{user: false, menu: true, transaction: false, orders: false}} tabName={"menu"}/>
            <TabItem activeTab={activeTab} setActiveTab={setActiveTab} linkRef={"/admin/menu"} 
                tabItemText={"Transactions"} newActiveTab={{user: false, menu: false, transaction: true, orders: false}} tabName={"transaction"}/>
            <TabItem activeTab={activeTab} setActiveTab={setActiveTab} linkRef={"/admin/orders"} 
                tabItemText={"Orders"} newActiveTab={{user: false, menu: false, transaction: false, orders: true}} tabName={"orders"}/>
        </div>
    )
}

function TabItem ({activeTab, setActiveTab, linkRef, tabItemText, newActiveTab, tabName}) {

    return (
    
        <Link onClick={() => {

            setActiveTab(newActiveTab)
        }} to={linkRef} className={`text-pnc font-bold tab ${activeTab[tabName] ? "tab-style" : ""}`}>{tabItemText}</Link> 
    )
}
export default Tab
