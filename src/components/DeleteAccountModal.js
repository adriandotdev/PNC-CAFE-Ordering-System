import React, {useState, useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'
import InputContainer from '../components/InputContainer'

function DeleteAccountModal() {

    let navigate = useNavigate()
    const {confirmation, setConfirmation} = useState('')
    const {userIDNumber} = useContext(UserContext)

    function deleteAccount() {

        fetch('http://localhost:3001/delete-user', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userIDNumber})
        })
        .then(res => res.json())
        .then( data => data)

    }
    
    return (
        <div className="modal m-0">
            
            <form className="modal-box" onSubmit={(e) => e.preventDefault()}>
                
                <p className="text-red-400 font-normal">This cannot be undone. This will permanently remove your PNC Cafe Account.</p>

                <p className="text-red-500 font-medium">{`Please type ${userIDNumber} to confirm`}</p>

                <InputContainer 
                    name="account" 
                    type="text"
                    labelContent="Delete Account"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}/>
                <div className="modal-action">
                    <Link to="/" onClick={(e) => {
                        
                        if (confirmation === userIDNumber)
                            deleteAccount()
                    }} className="cancel-changes-btn">Confirm</Link>
                    <label className="btn btn-sm md:btn-md btn-outline" htmlFor="account-delete-modal">Cancel</label>
                </div>
                
            </form>
        </div>
    )
}

export default DeleteAccountModal
