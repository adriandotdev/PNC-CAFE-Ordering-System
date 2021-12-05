import React, {useContext} from 'react'
import Button from '../components/Button'
import {AdminOrderContext} from '../contexts/AdminOrderContext'

function Order({id, date, status}) {

    const {setOrderID} = useContext(AdminOrderContext)

    return (
        <div className="border-pnc border shadow-lg flex flex-col gap-4 justify-between lg:flex-row lg:items-center w-full p-2 ">
            <section>
                <h1 className="font-medium">Order ID: <span className="text-pnc">{id}</span></h1>
                <h3 className="font-medium">Order Date: <span className="text-pnc">{date}</span></h3>
                <small className="font-medium text-lg">Status: <span className="text-pnc">{status}</span></small>
            </section>

            <section className="flex items-center">

                <label htmlFor="order-status" onClick={() => {
                    setOrderID(id)
                }} 
                className="button-sm modal-button" > Status </label> 
                
                <label htmlFor={id} className="text-white button-no-color modal-button"> Invoice </label>
                
            </section> 
           
        </div>
    )
}

export default Order
