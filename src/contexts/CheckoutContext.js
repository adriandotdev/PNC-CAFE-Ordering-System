import React, {createContext, useState} from 'react'

export const CheckoutContext = createContext()

// This will wrap up all the children components
export function CheckoutProvider(props) {

    const [checkout, setCheckout] = useState({

        subTotal: 0,
        otherDetails: {},
        items: []
    })

    return (
        <CheckoutContext.Provider value={{checkout, setCheckout}}>
            {props.children}
        </CheckoutContext.Provider>
    )
}