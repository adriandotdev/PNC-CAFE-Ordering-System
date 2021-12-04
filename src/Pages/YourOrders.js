import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import Button from '../components/Button'

function YourOrders() {

    const {userIDNumber} = useContext(UserContext)
    const [activeTab, setActiveTab] = useState({

        pending: true,
        cancelled: false,
        received: false
    })

    const [orders, setOrders] = useState([])

    const getPendingOrders = () => {
        fetch('http://localhost:3001/pending-orders', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({userIDNumber})
        })
        .then(res => res.json())
        .then(data => {
            setOrders(JSON.parse(data))
        })
    }

    const getReceivedOrders = () => {

    }

    const getCancelledOrders = () => {

    }

    // This will only run once for the first render.
    useEffect(() => {
        getPendingOrders()
    }, [])
    return (
        <div className="flex flex-col gap-3 items-stretch justify-start sm:max-w-md w-full md:max-w-lg mx-auto p-2 md:py-5">

            <h1 className="text-2xl font-bold text-pnc lg:text-4xl">Your Orders</h1>

            <div className="tabs tabs-boxed">

                <a onClick={() => {
                    
                    setActiveTab({pending: true, cancelled: false, received: false})
                    getPendingOrders()
                }} 
                className={`tab ${activeTab.pending ? "tab-style" : ""}`}>Pending</a> 

                <a onClick={() => setActiveTab({pending: false, cancelled: true, received: false})} 
                 className={`tab ${activeTab.cancelled ? "tab-style" : ""}`}>Cancelled</a> 

                <a onClick={() => setActiveTab({pending: false, cancelled: false, received: true})}  className={`tab ${activeTab.received ? "tab-style" : ""}`}>Received</a>
            </div>
            {/* Orders Container */}
            <div className="flex flex-col items-stretch gap-3 w-full">

                {
                    orders.map(order => {

                        return (

                            <div className="flex flex-col gap-4 justify-between sm:flex-row sm:items-center w-full border border-gray-400 p-2 ">
                                <section>
                                    <h1 className="font-medium">Order ID: {order.order_id}</h1>
                                    <h3 className="font-medium">Order Date: {order.order_date}</h3>
                                </section>

                                <section className="flex items-center">
                                    <Button className="button-sm" text="Receive"/>
                                    <Button className="button-no-color" text="View"/>
                                    
                                </section>
                            </div>
                        )
                    })
                    
                }
                
            </div>
        </div>
    )
}

export default YourOrders
