import React, {createContext, useState} from 'react'

export const UserContext = createContext()

// This will wrap up all the children components
export function UserProvider(props) {

    // This will change whenver the user is logged in, and when the session storage has a key of 'userID'
    const [userIDNumber, setUserIDNumber] = useState('');

    // Global state for the menu ID, this will change whenever a user selects a menu from the homepage, then it will render it to the MenuInfoPage.
    const [menuID, setMenuID] = useState('')

    // Global state for the current quantity of a specified/selected menu.
    const [quantity, setQuantity] = useState(1)

    // Global State for number of cart items.
    const [noOfCartItems, setNoOfCartItems] = useState(0)

    // This state value will change if the user is adding to the cart.
    const [addedToCart, setAddedToCart] = useState(false)

    // global state if the user has logged in.
    const [isUser, setUser] = useState(false)

    const [bagTotal, setBagTotal] = useState(0);

    const [subTotal, setSubTotal] = useState(0)

    const [isEditingDone, setEditingDone] = useState(false)

    const [invoice, showInvoice] = useState(false)

    return (
        <UserContext.Provider value={{userIDNumber, setUserIDNumber, 
                                    menuID, setMenuID, 
                                    quantity, setQuantity, 
                                    noOfCartItems, setNoOfCartItems, 
                                    addedToCart, setAddedToCart, 
                                    isUser, setUser,
                                    bagTotal, setBagTotal,
                                    subTotal, setSubTotal,
                                    isEditingDone, setEditingDone,
                                    invoice, showInvoice}}>
            {props.children}
        </UserContext.Provider>
    )
}