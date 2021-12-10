import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

function DeleteAccountModal() {

    // Here's the confirmation text that the user will input to confirm the deletion of account.
    const [confirmation, setConfirmation] = useState('')

    // User Context Properties
    const {userIDNumber, setUser} = useContext(UserContext)

    // A function to delete the logged in account.
    function deleteAccount() {

        fetch('http://localhost:3001/delete-user', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userIDNumber})
        })
        .then(res => res.json())
        .then( data => {
            setUser(false)
            window.sessionStorage.setItem('isUser', 'false');
            window.sessionStorage.setItem('idNumber', '');
            window.location.replace('http://localhost:3000')
        })
    }
    
    return (
        <div className="modal m-0">
            
            <div className="modal-box ">
                
                <section className="flex flex-col gap-2">
                    <p className="text-red-400 font-bold">This cannot be undone. This will permanently remove your PNC Cafe Account.</p>

                    <p className="text-red-500 font-medium">Please type <span className="text-pnc">{userIDNumber}</span> to confirm</p>
                </section>
                

                <section className="input-container flex flex-col-reverse relative">
                    <input placeholder="Please provide your ID Number here..." className="input border border-pnc focus:ring-1 focus:ring-pnc" type="text" name="" id="" value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)} />
                </section>

                <div className="modal-action">
                    <Link to={confirmation === userIDNumber ? "/" : ""} onClick={(e) => {
                        
                        // if the confirmation text (id number of user) is equal to the user context property userIDNumber
                        if (confirmation.length > 0 && confirmation === userIDNumber)
                            deleteAccount()
                    }} className="cancel-changes-btn">Confirm</Link>
                    <label className="btn btn-sm md:btn-md btn-outline" htmlFor="account-delete-modal">Cancel</label>
                </div>
                
            </div>
        </div>
    )
}

export default DeleteAccountModal
