import React, {useContext} from 'react'
import {AdminMenuContext} from '../contexts/AdminMenuContext'
import ModalButton from './ModalButton'

/** A Delete Modal that pops up at Menu Page 
 * when the admin wants to delete a menu. */
function DeleteModal({menu}) {

    const { menuID, setMenuID } = useContext(AdminMenuContext)
    
    /** A function that sends a DELETE request
     * by a menuID. */
    async function deleteMenu() {

        await fetch('http://localhost:3001/delete-menu', { 
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({menuID})
        })
    }
    return (
        <>  
            <div className="modal">
            
                <div className="modal-box">
                    <p className="font-bold text-xl text-red-500 whitespace-normal">Are you sure you want to delete <span className="text-pnc">{menu}</span> in the menu?</p>

                    <div className="modal-action">

                        <ModalButton onClick={() => {

                            deleteMenu();
                            setMenuID('') // set the menu ID to empty to re-render the Menu Page.
                        }} htmlFor="delete-modal" className="admin-delete-btn modal-button" text="Confirm"/>

                        <ModalButton onClick={() => {

                            setMenuID('') // set the menu ID to empty to re-render the Menu Page.
                        }} htmlFor="delete-modal" className="button-no-color modal-button" text="Cancel"/>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default DeleteModal
