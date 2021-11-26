import React, {useState, useEffect, useMemo, useCallback, useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

function ShoppingCart() {

    const {userIDNumber, noOfCartItems, setNoOfCartItems, addedToCart, isUser} = useContext(UserContext)
    const [clicked, setClicked] = useState(false)
    

    useEffect(() => {
        console.log('USE EFFECT FOR CART ITEMS')
        fetch('http://localhost:3001/get-cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userIDNumber})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setNoOfCartItems(JSON.parse(data).length)
        }) 
    }, [isUser, addedToCart])
    
    return (
        <>
            {
                isUser && <div className="indicator relative">
                    <div className="indicatior-item badge absolute right-0 z-10 bg-pncHover border-none">{noOfCartItems}</div>
                    <Link to="/cart" onClick={() => setClicked(!clicked)} className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </Link>  
                </div>
            }
        </>
    )
}

export default ShoppingCart
