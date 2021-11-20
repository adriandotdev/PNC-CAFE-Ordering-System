import React, {useState, useEffect, useContext} from 'react'
import CartMenu from '../components/CartMenu'
import {UserContext} from '../contexts/UserContext'

function ShoppingCart() {

    const [userIDNumber,,,,,,noOfCartItems, setNoOfCartItems, addedToCart] = useContext(UserContext)
    const [clicked, setClicked] = useState(false)
    
    useEffect(() => {

        console.log('running shopping cart')
        fetch('http://localhost:3001/get-cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userIDNumber})
        })
        .then(res => res.json())
        .then(data => {
            console.log('hey', data) // For Testing
            setNoOfCartItems(JSON.parse(data).length)
        })
    }, [addedToCart])

    return (
        <>
        <div className="indicator relative">
            <div className="indicatior-item badge absolute right-0 z-10 bg-pncHover border-none">{noOfCartItems}</div>
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

                    <div className="modal-action flex-col-reverse items-start">
                        <h1 className="font-medium md:text-xl ml-3">Subtotal: $30.00</h1>
                        <section>
                            <label htmlFor="cart" className="btn btn-outline btn-sm rounded-none">Checkout</label>
                            <label htmlFor="cart" className="btn btn-outline btn-sm rounded-none">Cancel</label>
                        </section>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShoppingCart
