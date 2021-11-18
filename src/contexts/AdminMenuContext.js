import React, {createContext, useState} from 'react'

export const AdminMenuContext = createContext()

// This will wrap up all the children components
export function AdminMenuProvider(props) {

    const [menuID, setMenuID] = useState('')
    const [isEditing, setEditing] = useState(false);
    const [menu, setMenuList] = useState([]) 
    
    return (
        <AdminMenuContext.Provider value={[menuID, setMenuID, isEditing, setEditing, menu, setMenuList]}>
            {props.children}
        </AdminMenuContext.Provider>
    )
}


