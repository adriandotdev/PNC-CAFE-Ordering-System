import React, {useState} from 'react'
import CartMenu from '../components/CartMenu'
import Button from '../components/Button'
// This is the shopping cart button
function ShoppingCart() {

    const [clicked, setClicked] = useState(false)
    return (
        <>
        <div className="indicator relative">
            <div className="indicatior-item badge absolute right-0 z-10 bg-pncHover border-none">0</div>
            <label htmlFor="cart" onClick={() => setClicked(!clicked)} className="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </label>  

            <input type="checkbox" name="cart" id="cart" className="modal-toggle"/>
            <div className="modal ">
                
                <div className="modal-box ">
                    <h1 className="text-2xl py-5">My Cart</h1>


                    {/* menu container */}
                    <div className="overflow-auto max-h-56">
                        
                        {/* menu */}
                        <CartMenu />                  
                    </div>

                    <div className="modal-action">
                        <h1 className="font-medium md:text-xl mr-4">Subtotal: $30.00</h1>
                        <label htmlFor="cart" className="btn btn-accent">Checkout</label>
                        <label htmlFor="cart" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShoppingCart
