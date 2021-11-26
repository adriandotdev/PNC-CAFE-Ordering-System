import React from 'react'
import Button from './Button'

function QuantityButton() {
    return (
        <div className="btn-group justify-center">
            <Button className="qty-btn" text="-" />    
            <section className="quantity">
                2
            </section>     
            <Button className="qty-btn" text="+" />     
        </div>
    )
}

export default QuantityButton
