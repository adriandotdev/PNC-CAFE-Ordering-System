import React, {createContext, useState} from 'react'

export const UserContext = createContext()

// This will wrap up all the children components
export function UserProvider(props) {

    const [userIDNumber, setUserIDNumber] = useState(null);
    const [menuID, setMenuID] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [cartMenus, setCartMenus] = useState(0)
    
    return (
        <UserContext.Provider value={[userIDNumber, setUserIDNumber, menuID, setMenuID, quantity, setQuantity]}>
            {props.children}
        </UserContext.Provider>
    )
}