import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'
import {CheckoutContext} from '../contexts/CheckoutContext'
import UserDetail from '../components/UserDetail'
import CheckedOutItem from '../components/CheckedOutItem'
import Button from '../components/Button'
import CheckoutMessage from '../components/CheckoutMessage'

document.addEventListener('unload', () => {

        return "unloading"
})

function CheckoutPage() {

    const {setUser, userIDNumber, setSubTotal, setUserIDNumber} = useContext(UserContext)
    const {checkout, setCheckout} = useContext(CheckoutContext)
    const [userDetails, setUserDetails] = useState({})
    const [isOrderPlaced, placedOrder] = useState(false)

    

    useEffect(() => {
        
        console.log('rendered at checkout page')
        document.title = 'PNC Cafe | Checkout'
        let id_number = sessionStorage.getItem('idNumber')

        if (id_number) {
            setUserIDNumber(id_number);
            setUser(true)
        }

        setSubTotal(0) // reset the subtotal

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

    // useEffect(() => {

        

    //     return () => document.addEventListener('beforeunload', () => {

    //         console.log('unloading')
    //     })
    // })

    useEffect(() => {

        let checkout = sessionStorage.getItem('checkout')

        window.addEventListener('load', () => {
            if (checkout)
                setCheckout(JSON.parse(checkout))
        })
        
        return () => window.removeEventListener('load', () => {
            if (checkout)
                setCheckout(JSON.parse(checkout))
        })
    }, [])
    return (
        <main className="p-5 py-8 sm:p-10 grid gap-8 sm:gap-5 md:gap-10 grid-cols-1 place-items-stretch place-content-start md:max-w-2xl w-full mx-auto">
            
            <div className="overflow-x-auto">
                <ul className="steps gap-5 sm:gap-0 w-full">
                    <li data-content="✓" className="step step-accent break-word text-pnc font-medium">Required Info</li>
                    <li data-content={isOrderPlaced ? "✓" : '2'} className="step step-accent text-pnc font-medium">{isOrderPlaced ? "Order Placed" : "Place Order"}</li>
                    <li data-content={isOrderPlaced ? "✓" : '3'} className={`step text-pnc font-medium ${isOrderPlaced ? 'step-accent' : ''}`}>Preparing</li>
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
                    <UserDetail label="Location" value={checkout.otherDetails.location}/>
                    <UserDetail label="Payment Method" value={checkout.otherDetails.paymentMethod}/>
                </div>
                
                <div className="flex flex-col gap-3 justify-stretch pb-5 border-pnc border-b-2 border-dashed">
                    {
                        checkout.items.map(item => {
                            return ( <CheckedOutItem key={item.menuID} menu={item.menu} price={item.menuPrice} quantity={item.quantity}/> )
                        })
                    }
                </div>

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

                <div className="flex justify-between">
                    <h1 className="font-bold text-pnc sm:text-xl">Total</h1>
                    <p className="sm:text-xl font-mono font-extrabold">{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(checkout.otherDetails.paymentMethod === 'Cash On Delivery' ? checkout.subTotal + 10 : checkout.subTotal)}</p>
                </div>

                <div className="flex items-center gap-3">
                    <Button onClick={() => placedOrder(true)} className="button" text="Place Order"/>
                    <Link to="/cart" className="button">Cancel</Link>
                </div>
            </div> : <CheckoutMessage />}
        </main>
    )
}

export default CheckoutPage
