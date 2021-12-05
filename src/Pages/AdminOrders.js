import React, {useState, useEffect, useContext} from 'react'
import {AdminOrderContext} from '../contexts/AdminOrderContext'
import Order from '../components (admin)/Order'
import StatusModal from '../components (admin)/StatusModal'
import Invoice from '../components/Invoice'

function AdminOrders() {

    const {orders, setOrders} = useContext(AdminOrderContext)

    /** Get the orders */
    const getOrders = () => {

        fetch('http://localhost:3001/get-orders')
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
            <div className="min-h-screen row-start-2 col-span-12 md:col-span-4">
                
                {
                    orders.length > 1 && orders.map(order => { 
                        
                        if (order.status === 'to prepare' || order.status === 'preparing') {
                            console.log(order) // for testing
                            return  (
                                
                                <div key={order.order_id}>
                                    <Order id={order.order_id} date={order.order_date} status={order.status}/>
                                    <StatusModal idNumber={order.id_number} order_id={order.order_id}/>
                                    <Invoice orderDetails={order} referenceFor={order.order_id} />
                                </div>
                            )
                           
                        }
                         
                    })
                }
                {/* <h1 className="min-h-screen row-start-2 col-span-12 md:col-span-4 text-pnc text-2xl lg:text-3xl font-medium ">There are no pending orders</h1> */}
            </div>
        </div>
    )
}

export default AdminOrders
