import React from 'react'

function QuantityButton({decrease, increase, quantity, menuID}) {

    /**
     * decrease - decreases the quantity
     * increase - increases the quantity
     * 
     * quantity - the current qty of the specific cart item (that can be increased or decreased)
     * 
     * menuID - a props that needed to know what cart item is going to be edited.
     */
    return (
        <>
            <div className="btn-group justify-center">
                
                {/* For the htmlFor

                    we need to set the condition
                    so that the modal for deletion won't appear
                    when the decrease button gets clicked.
                */}
                <label onClick={decrease} htmlFor={quantity === 1 && menuID} className="qty-btn">-</label>  
                <section className="quantity">
                    {quantity}
                </section>     
                <label onClick={increase} htmlFor="" className="qty-btn">+</label>    
            </div>
        </>
    )
}

export default QuantityButton
