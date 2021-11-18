import React, {useContext} from 'react'
import {AdminMenuContext} from '../contexts/AdminMenuContext'
import ModalButton from './ModalButton'

function DeleteModal() {

    const [ menuID, setMenuID ] = useContext(AdminMenuContext)
    async function deleteMenu() {

        const res = await fetch('http://localhost:3001/delete-menu', { 
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
                    <p>Are you sure you want to delete this menu?</p>

                    <div className="modal-action">

                        <ModalButton onClick={() => {

                            deleteMenu();
                            setMenuID('')
                        }} htmlFor="delete-modal" className="admin-delete-btn modal-button" text="Confirm"/>

                        <ModalButton onClick={() => {

                            setMenuID('')
                        }} htmlFor="delete-modal" className="admin-cancel-btn modal-button" text="Cancel"/>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default DeleteModal
