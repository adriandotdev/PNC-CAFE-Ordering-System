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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
