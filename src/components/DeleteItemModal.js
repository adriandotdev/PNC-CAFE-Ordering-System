import React, {useContext} from 'react'
import {UserContext} from '../contexts/UserContext'

function DeleteItemModal({userIDNumber, menuID, isChecked, menuPrice, quantity}) {

    const {setAddedToCart, setSubTotal} = useContext(UserContext)

    /** NOTE:
     * 
     * THIS WILL CHANGE WHEN THE DELETE ITEM
     * BECOMES A PROP OF THIS FUNCTION COMPONENT.
     */
    async function deleteItem() {

        console.log(menuID)
        await fetch('http://localhost:3001/remove-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userIDNumber, menuID})
        })

        setAddedToCart(true)
        if (isChecked) {

            setSubTotal(prevValue => prevValue - menuPrice * quantity)
        }
    }

    /** So here, we set the id of input tag to menuID to identify
     * which menu_id is going to be queried when the confirm
     * button is selected. */
    return (
        <div className="absolute">
             
            <input type="checkbox" id={menuID} className="modal-toggle" /> 
            <div className="modal">
                <div className="modal-box md:max-w-sm">
                    <p className="text-xl font-bold text-red-500">Delete this item?</p> 
                    <div className="modal-action">
                    <label onClick={deleteItem} htmlFor={menuID} className="admin-delete-btn">Confirm</label> 
                    <label htmlFor={menuID} className="button-no-color">Close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteItemModal
