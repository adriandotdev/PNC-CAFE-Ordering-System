import React from 'react'
import ModalButton from './ModalButton'

function DeleteModal() {
    return (
        <>  
            <div className="modal">
            
                <div className="modal-box">
                    <p>Are you sure you want to delete this menu?</p>

                    <div className="modal-action">
                        <ModalButton htmlFor="delete-modal" className="admin-delete-btn modal-button" text="Confirm"/>
                        <ModalButton htmlFor="delete-modal" className="admin-cancel-btn modal-button" text="Cancel"/>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default DeleteModal
