import React, {useState, useEffect, useContext} from 'react'
import {AdminOrderContext} from '../contexts/AdminOrderContext'

/** This Modal is for the Admin Context
 * this will pop up whenever the admin wants to change
 * the status of the order. */
function StatusModal({idNumber, order_id}) {

    /** AdminOrderContext */
    const {orderID, setOrderID, setOrders} = useContext(AdminOrderContext)
    /** A state that tracks what is the status
     * that is going to be set for the clicked item. */
    const [newStatus, setNewStatus] = useState('preparing')
   

    /** A function that sets
     * the new status.
     * 
     * The body property must have
     * a userIDNumber and orderID
     * to update the correct order. */
    const setStatus = () => {
        fetch('http://localhost:3001/set-order-as', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: newStatus, userIDNumber: idNumber, orderID})
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
        <>
        <input type="checkbox" className="modal-toggle" id="order-status" />
        <div className="modal">
            <div className="modal-box flex flex-col gap-3 lg:max-w-xs w-full">

                <h1 className="text-pnc font-bold text-2xl md:text-4xl">Status</h1>
                <div className="form-control flex-row items-center gap-3">
                    
                    <input checked={true} onChange={(e) => { 
                        setNewStatus(e.target.value)
                    }} type="radio" name="status" id="preparing" className="radio radio-accent" value="preparing" />
                    <label htmlFor="preparing" className="cursor-pointer">Preparing</label>
                </div> 

                <div className="form-control flex-row items-center gap-3">
                    
                    <input onChange={(e) => {
                        setNewStatus(e.target.value)
                    }} type="radio" name="status" id="received"  className="radio radio-accent" value="to received" />
                    <label htmlFor="received" className="cursor-pointer">To Received</label>
                </div> 

                <div className="modal-action">
                    <label className="button" onClick={() => {

                        setStatus() // call the function
                        setOrders([]) // we set it to empty to refresh the orders page and get the updated data.

                    }} htmlFor="order-status">Confirm</label>
                    <label onClick={() => setOrderID('')} htmlFor="order-status" className="button">Close</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default StatusModal
