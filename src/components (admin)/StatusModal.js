import React, {useState, useEffect, useContext} from 'react'
import {AdminOrderContext} from '../contexts/AdminOrderContext'

function StatusModal({idNumber, order_id}) {

    const [newStatus, setNewStatus] = useState('')
    const {orderID, setOrderID, setOrders} = useContext(AdminOrderContext)

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
                    
                    <input onChange={(e) => { 
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
                        setStatus()
                        setOrders([])
                    }} htmlFor="order-status">Confirm</label>
                    <label onClick={() => setOrderID('')} htmlFor="order-status" className="button">Close</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default StatusModal
