import React, {useState, useEffect, useContext} from 'react'
import {AdminOrderContext} from '../contexts/AdminOrderContext'

/** This Modal is for the Admin Context
 * this will pop up whenever the admin wants to change
 * the status of the order. */
function StatusModal({idNumber, referenceFor, dropdownValue, setUpdateDone}) {

    /** AdminOrderContext */
    const {orderID, setOrderID, setOrders} = useContext(AdminOrderContext)
    /** A state that tracks what is the status
     * that is going to be set for the clicked item. */
    const [newStatus, setNewStatus] = useState('preparing')

    /** A function that gets the orders 
     * based on the specified status. */
    const getOrdersWithStatus = (status) => {

        fetch('http://localhost:3001/get-order-with-status', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data => {
            setOrders(JSON.parse(data))
        })
    }

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
        <input type="checkbox" className="modal-toggle" id={referenceFor} />
        <div className="modal">
            <div className="modal-box flex flex-col gap-3 lg:max-w-xs w-full">

                <h1 className="text-pnc font-bold text-2xl md:text-4xl">Status</h1>
                <div className="form-control flex-row items-center gap-3">
                    
                    <input onChange={(e) => { 
                        setNewStatus('preparing')
                    }} type="radio" name="status" id={referenceFor + "/preparing"} className="radio radio-accent" value="preparing" />
                    <label htmlFor={referenceFor + "/preparing"} className="cursor-pointer">Preparing</label>
                </div> 

                <div className="form-control flex-row items-center gap-3">
                    
                    <input onChange={(e) => {
                        setNewStatus('to received')
                    }} type="radio" name="status" id={referenceFor + "/to received"}  className="radio radio-accent" value="to received" />
                    <label htmlFor={referenceFor + "/to received"} className="cursor-pointer">To Received</label>
                </div> 

                <div className="modal-action">
                    <label className="button" onClick={() => {

                        setUpdateDone(true) // show the success message modal.

                        // Run this block of code after 1.5 seconds
                        setTimeout(() => {

                            setStatus() // call the function
                            setOrders([])
                            setUpdateDone(false)
                        }, 1500)
                    }} htmlFor={referenceFor}>Confirm</label>
                    <label onClick={() => {
                        
                        setNewStatus('preparing')
                        setOrderID('')
                    }} htmlFor={referenceFor} className="button">Close</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default StatusModal
