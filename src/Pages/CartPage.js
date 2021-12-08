import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import {CheckoutContext} from '../contexts/CheckoutContext'
import CartItem from '../components/CartItem'
import {Link} from 'react-router-dom'
import CheckoutModal from '../components/CheckoutModal'

function CartPage() {

    // Checkout Context
    const {setCheckout} = useContext(CheckoutContext) 
    // User Context which consist of all the global variables that shared across the app. (User Context)
    const {setUser, isUser, userIDNumber, 
        setUserIDNumber, addedToCart, setAddedToCart, 
        setQuantity, noOfCartItems, bagTotal, 
        setBagTotal, subTotal, setSubTotal} = useContext(UserContext) 
    const [cartItems, setCartItems] = useState([]) // holds the cart items of specified user.
    const [isAllSelected, setAllSelected] = useState(false) // Boolean value if the cart items is all selected
    const [isAllClicked, setAllClicked] = useState(false) // a state when the user selects all the items using the select all button

    useEffect(() => {
        
        document.title = 'PNC Cafe | My Cart' // set document title.
        setAddedToCart(false) // set the global variable when a user added to a cart.
        setQuantity(1) // reset the global state 'quantity' to 1.

        let id_number = sessionStorage.getItem('idNumber') // get the sesssion storage with a key of idNumber.

        /** By checking the id_number key
         * at sessionStorage, we can maintain
         * the data, so that the user is still logged in. */
        if (id_number) {
            setUserIDNumber(id_number);
            setUser(true)
        }
            
        // FETCHING THE CART ITEMS BASED ON ID NUMBER THAT IS SPECIFIED
        fetch('http://localhost:3001/get-cart-items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userIDNumber})
        })
        .then(res => res.json())
        .then(data => {
            
            setCartItems(JSON.parse(data))
            
            // This part will get the total price of all the items in the bag.
            let bagTotal = 0;
            
            /** Loop throgh each item, and get the quantity and menu_price */
            JSON.parse(data).forEach(item => {

                bagTotal += item.quantity * item.menu_price
            })

            setBagTotal(bagTotal)
        })

    }, [addedToCart, bagTotal, isUser, isAllSelected]) // Dependency list's that triggers this useEffect to run when one of them value changes.
    
    useEffect(() => {

        console.log('cart page event')
        if (document.URL === 'http://localhost:3000/cart') {
            document.addEventListener('click', addEventToDocument)
        }

        return () => document.removeEventListener('click', addEventToDocument)
    })

    /** The purpose of this event function
     * is to determine if the page is not
     * the checkout page and cart page.
     * 
     * so that all of the properties/states
     * get reset such as the 'checkout' and 'subtoal'
     * 
     * Also, the 'checkout' key also remove. */
    function addEventToDocument () {

        if (document.URL !== 'http://localhost:3000/checkout' && document.URL !== 'http://localhost:3000/cart') {
            sessionStorage.removeItem('checkout')
            setCheckout({subTotal: 0, otherDetails: {}, items: []})
            setSubTotal(0)
        }
    }

    /** This function computes
     * the subtotal for all of the 
     * selected items. */
    const addTotalCost = () => {

        let total = 0;

        cartItems.forEach(item => {

            total += item.menu_price * item.quantity;
        })
        
        return total;
    }

    return (
        <>
            {
               cartItems.length > 0 ?  <div className="cart-page p-8 gap-4">

                    <section className="row-start-1 row-end-2 col-span-3 md:col-span-1 flex flex-wrap justify-between items-center">
                        <h1 className=" self-start w-max text-3xl md:text-4xl font-bold text-pnc">My Bag</h1>

                        <section className="flex items-center gap-3">
                            <label className="text-pnc font-bold" htmlFor="select-all">Select All</label>
                            <input checked={isAllSelected} onChange={() => {

                                    // If the user deselect the 'Select All checkbox', set the sub-total to 0.
                                    if (!isAllSelected === false)
                                        setSubTotal(0)

                                    !isAllSelected ? setCheckout(prevValue => {return {...prevValue, items: cartItems.map(item => {

                                        return {menuID: item.menu_id, menu: item.menu, menuPrice: item.menu_price, quantity: item.quantity}
                                    })}}) : setCheckout(prevValue => {return {...prevValue, items: []}})

                                    // Changing the value of the subtotal.
                                    if (!isAllSelected === true)
                                        setSubTotal(addTotalCost())
                                    else if (!isAllSelected === false)
                                        setSubTotal(0)

                                    if (!isAllSelected === false)
                                        setAllClicked(true)
                                
                                    setAllSelected(!isAllSelected) // set to opposite of the current value.
                                }} className="checkbox checkbox-accent" type="checkbox" id="select-all" />
                        </section>
                        
                    </section>
                    
                    {/* Cart Item's Container */}
                    <div className="cart-container">
                        
                        {
                            cartItems.map(item => {
                                
                                return (
                                     <CartItem 
                                        isAllClicked={isAllClicked}
                                        setAllClicked={setAllClicked}
                                        selectAll={isAllSelected} 
                                        setAllSelected={setAllSelected} 
                                        key={item.menu_id} 
                                        menu={item.menu} 
                                        image={item.image_path} 
                                        menuPrice={item.menu_price} 
                                        menuID={item.menu_id} 
                                        quantity={item.quantity}/>
                                )
                            })
                        }
                       
                    </div>
                    
                    {/* Details */}
                    <div className=" row-start-3 row-end-4 col-start-1 col-end-3 flex flex-col items-start gap-5 md:col-start-2 md:col-end-4 md:row-start-2">
                        <h1 className="text-3xl font-bold text-pnc">Details</h1>
                        
                        <p className="text-xl font-medium"><span className="details">Total Bag Items:</span> {noOfCartItems}</p>

                        <p className="text-xl font-medium"><span className="details">Subtotal:</span> {new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(subTotal)}</p>

                        <p className="text-xl font-medium"><span className="details">Bag Total:</span> {new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(bagTotal)}</p>

                        <label htmlFor={subTotal > 0 ? "checkout-modal" : undefined} className="button">Proceed to Checkout</label>
                        <small className="instruction">*Please select atleast one bag item to proceed to checkout</small>
                        <CheckoutModal />
                    </div>
                </div>
            : 
            /** This will only render when the user is already placed the order.  */
            <div className="flex flex-col gap-3 justify-center items-center">
                 <h1 className="text-center w-full text-2xl text-pnc font-bold md:text-3xl lg:text-4xl">Cart is Empty</h1> 
                 <Link to="/homepage" className="button">Go to Menu</Link>
            </div>   } 
        </>
    )
}

export default CartPage
