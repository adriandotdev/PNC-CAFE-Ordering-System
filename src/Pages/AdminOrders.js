import React, {useState, useEffect, useContext} from 'react'
import {AdminOrderContext} from '../contexts/AdminOrderContext'
import Order from '../components (admin)/Order'
import StatusModal from '../components (admin)/StatusModal'
function AdminOrders() {

    const {orders, setOrders} = useContext(AdminOrderContext)

    /** Get the orders */
    const getOrders = () => {

        fetch('http://localhost:3001/get-orders')
        .then(res => res.json())
        .then(data => {
            setOrders(JSON.parse(data))
        })
    }

    useEffect(() => {

        if (orders.length < 1)
            getOrders()
    }, [orders])

    return (
        <div className="row-start-2 row-end-5 grid grid-cols-12 w-screen px-5 gap-3">

            <h1 className="row-start-1 col-span-12 text-pnc font-bold text-2xl lg:text-4xl">Orders</h1>
            <div className="min-h-screen row-start-2 col-span-12 md:col-span-4 bg-green-100">
                
                {
                    orders.length > 1 && orders.map(order => { return  (
                        
                        <div key={order.order_id}>
                            <Order id={order.order_id} date={order.order_date} status={order.status}/>
                            <StatusModal idNumber={order.id_number} order_id={order.order_id}/>
                        </div>
                    )})
                }
                 
            </div>
        </div>
    )
}

export default AdminOrders
