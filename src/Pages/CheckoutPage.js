import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'
import {CheckoutContext} from '../contexts/CheckoutContext'
import UserDetail from '../components/UserDetail'
import CheckedOutItem from '../components/CheckedOutItem'
import Button from '../components/Button'
import CheckoutMessage from '../components/CheckoutMessage'
import PlaceOrderModal from '../components/PlaceOrderModal'

// The Checkout page for the user.
function CheckoutPage() {

    // UserContext's state that need for this page.
    const {setUser, setSubTotal, userIDNumber, setUserIDNumber} = useContext(UserContext)
    // CheckoutContext's state that need for this page.
    const {checkout, setCheckout} = useContext(CheckoutContext)
    // User's details that is going to be used when the checkout page is rendered.
    const [userDetails, setUserDetails] = useState({})
    // State for determining if the order is already placed.
    const [isOrderPlaced, placedOrder] = useState(false)

    const addOrder = () => {

        /** Get the 'items' and 'otherDetails' properties at the checkout state from CheckoutContext 
         *  that are modified at CartPage before this page gets rendered. */
        const items = JSON.stringify(checkout.items)
        const orderDetails = JSON.stringify(checkout.otherDetails)

        // Sets the date as a 'CURRENT DATE'
        const currentDate = new Date(Date.now())

        /** To follow the syntax at SQL, we need to extract
         * the Year-Month-Date of the currentDate we specified. */
        const orderDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-0${currentDate.getDate()}`;

        
        fetch('http://localhost:3001/add-order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userIDNumber, // userIDNumber from the UserContext.
                orderID: Date.now().toLocaleString(), // The orderID is the timestamp of the exact milliseconds the order is get placed.
                orderDate, 
                items, 
                orderDetails,
                status: 'pending'}) // when the order is get placed, the first status is 'pending'.
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    /** This will run for every refresh and rendered */
    useEffect(() => {

        /** To avoid, data lost when refreshed,
         * we need to check if the sessionStorage has a 
         * checkout key. */
         let session_checkout = sessionStorage.getItem('checkout')

        if (session_checkout)
            setCheckout(JSON.parse(session_checkout))
        else
            sessionStorage.setItem('checkout', JSON.stringify(checkout))
    }, [])

    useEffect(() => {
        
        document.title = 'PNC Cafe | Checkout' // set the document title.

        // get the idNumber key at session storage
        let id_number = sessionStorage.getItem('idNumber')
       
        /** check if the idNumber is not empty so that
         * we can maintain the data and the user is still logged in. */
        if (id_number) {
            setUserIDNumber(id_number);
            setUser(true)
        }

        // Fetch user data
        fetch('http://localhost:3001/user-id', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userIDNumber: id_number})
        })
        .then(response => response.json())
        .then(data =>  {
            
            const parsedData = JSON.parse(data)

            console.log(parsedData)
            setUserDetails({
                name: `${parsedData[0]['given_name']} ${parsedData[0]['middle_name']} ${parsedData[0]['last_name']}`,
                mobileNumber: parsedData[0]['mobile_number'],
                idNumber: parsedData[0]['id_number']
            })
        })
    }, [])

    /** A function that adds an
     * event to the document.
     * 
     * The purpose of this event function
     * is to determine if the user leaves
     * the checkout page so that, we can remove
     * the 'checkout' key at the session storage */
    function addEventToDocument () {

        console.log('clicked from checkout page')
        if (document.URL !== 'http://localhost:3000/checkout') {
            console.log('not the same page')
            sessionStorage.removeItem('checkout')
            setCheckout({subTotal: 0, otherDetails: {}, items: []})
        }
    }

    /** This will always run to maintain the
     * adding of event to the document. */
    useEffect(() => {

        if (document.URL === 'http://localhost:3000/checkout') {
            document.addEventListener('click', addEventToDocument)
        }

        return () => document.removeEventListener('click', addEventToDocument)
    })

    function PlaceOrder () {

         /** Set the isOrderPlaced to true
         * so that we can change the page. */
        placedOrder(true)
        addOrder()
    }
    return (
        <main className="p-5 py-8 sm:p-10 grid gap-8 sm:gap-5 md:gap-10 grid-cols-1 place-items-stretch place-content-start md:max-w-2xl w-full mx-auto">
            
            {/* This is the Steps component */}
            <div className="overflow-x-auto">
                <ul className="steps gap-5 sm:gap-0 w-full">
                    <li data-content="✓" className="step step-accent break-word text-pnc font-medium">Required Info</li>
                    <li data-content={isOrderPlaced ? "✓" : '2'} className="step step-accent text-pnc font-medium">{isOrderPlaced ? "Order Placed" : "Place Order"}</li>
                    <li data-content={isOrderPlaced ? "✓" : '3'} className={`step text-pnc font-medium ${isOrderPlaced ? 'step-accent' : ''}`}>Pending</li>
                    <li className="step text-pnc font-medium">Order Received</li>
                </ul>
            </div>
            

            { !isOrderPlaced ? <div className="flex flex-col gap-8">
                <h1 className="text-3xl md:text-4xl font-bold text-pnc">Checkout</h1>

                 {/* USER DETAILS */}
                <div className="user-details pb-5 border-pnc border-b-2">
                    <UserDetail label="Name" value={userDetails['name']}/>
                    <UserDetail label="Mobile Number" value={userDetails['mobileNumber']}/>
                    <UserDetail label="ID Number" value={userDetails['idNumber']}/>
                    <UserDetail label="Desired Time" value={checkout.otherDetails.desiredTime}/>
                    { checkout.otherDetails.paymentMethod === 'Cash On Delivery' && <UserDetail label="Location" value={checkout.otherDetails.location}/> }
                    <UserDetail label="Payment Method" value={checkout.otherDetails.paymentMethod}/>
                </div>
                
                {/* List of Checked Out Item */}
                <div className="flex flex-col gap-3 justify-stretch pb-5 border-pnc border-b-2 border-dashed">
                    {
                        checkout.items.map(item => {
                            return ( <CheckedOutItem key={item.menuID} menu={item.menu} price={item.menuPrice} quantity={item.quantity}/> )
                        })
                    }
                </div>

                {/* Subtotal and Delivery Fee (Delivery Fee will show if the user only choose the Cash on delivery option.) */}
                <div className="flex flex-col gap-3 pb-5 border-pnc border-b-2">
                    <section className="flex justify-between">
                        <p className="font-bold text-pnc">Subtotal</p>
                        <p className="font-mono font-extrabold">{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(checkout.subTotal)}</p>
                    </section>

                    <section className={`flex justify-between ${checkout.otherDetails.paymentMethod === 'Cash On Delivery' ? 'block' : 'hidden'}`}>
                        <p className="font-bold text-pnc">Delivery Fee</p>
                        <p className="font-mono font-extrabold">PHP 10.00</p>
                    </section>
                </div>

                {/* Total */}
                <div className="flex justify-between">
                    <h1 className="font-bold text-pnc sm:text-xl">Total</h1>
                    <p className="sm:text-xl font-mono font-extrabold">{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(checkout.otherDetails.paymentMethod === 'Cash On Delivery' ? checkout.subTotal + 10 : checkout.subTotal)}</p>
                </div>

                {/* Place Order and Cancel button */}
                <div className="flex items-center gap-3">
                    <label htmlFor="place-order-modal" className="modal-button button">Place Order</label>
                    <Link to="/cart" className="button-no-color">Cancel</Link>
                </div>
            </div> : <CheckoutMessage />}
            <PlaceOrderModal PlaceOrder={PlaceOrder}/>
        </main>
    )
}

export default CheckoutPage
