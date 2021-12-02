import React from 'react'
import Button from '../components/Button'
import {Link} from 'react-router-dom'

function CheckoutMessage() {
    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            
            <h1 className="font-bold text-pnc text-xl sm:text-2xl lg:text-3xl text-center">Your order has been processed!</h1>
            <Link to="/homepage" className="button">Go Back to Menu</Link>
        </div>
    )
}

export default CheckoutMessage
