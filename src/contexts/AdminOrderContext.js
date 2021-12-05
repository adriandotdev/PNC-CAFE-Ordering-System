import React, {createContext, useState} from 'react'

export const AdminOrderContext = createContext()

// This will wrap up all the children components
export function AdminOrderProvider(props) {

    const [orderID, setOrderID] = useState('')
    const [orders, setOrders] = useState([])

    return (
        <AdminOrderContext.Provider value={{orderID, setOrderID, orders, setOrders}}>
            {props.children}
        </AdminOrderContext.Provider>
    )
}
