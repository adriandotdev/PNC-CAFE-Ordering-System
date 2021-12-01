import React, {createContext, useState} from 'react';

export const CheckoutContext = createContext();

export function CheckoutProvider(props) {

    const [state, setState] = useState({

        cartItem: []
    })
    return (

        <CheckoutContext.Provider value={state, setState}>
            {props.children}
        </CheckoutContext.Provider>
    )
}