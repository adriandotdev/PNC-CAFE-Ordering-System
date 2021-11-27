import React from 'react'
import Button from './Button'

function QuantityButton({decrease, increase, quantity}) {
    return (
        <div className="btn-group justify-center">
            <Button onClick={decrease} className="qty-btn" text="-" />    
            <section className="quantity">
                {quantity}
            </section>     
            <Button onClick={increase} className="qty-btn" text="+" />     
        </div>
    )
}

export default QuantityButton
