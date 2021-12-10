import React, {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import ProfileInput from '../components/ProfileInput'
import InputContainer from '../components/InputContainer'
import SuccessAlert from '../components/SuccessAlert'
import ErrorAlert from '../components/ErrorAlert'
import {UserContext} from '../contexts/UserContext'
import DeleteAccountModal from '../components/DeleteAccountModal'

function ProfilePage() {

    /**
     * All of the state that has 'Disabled' word
     * is responsible for toggling the textfield, meaning
     * if it is enabled or disabled.
     * 
     * The toggling will enabled if the user clicks the edit button (Pen Logo)
     */
    let navigate = useNavigate()

    const {userIDNumber, setUserIDNumber, isUser, setUser, setQuantity, isEditingDone, setEditingDone} = useContext(UserContext)

    const [emailDisabled, setEmailDisabled] = useState(true)
    const [email, setEmail] = useState('')

    const [contactDisabled, setContactDisabled] = useState(true)
    const [contactNumber, setContactNumber] = useState('')

    const [passwordDisabled, setPasswordDisabled] = useState(true)
    const [password, setPassword] = useState('')

    const [imagePath, setImagePath] = useState('');
    const [fullName, setFullName] = useState('')

    const [cancelEditing, setCancelEditing] = useState(false)
    const [isPasswordToBeEdit, setPasswordToBeEdit] = useState(false)

    const [oldPassword, setOldPassword] = useState('')
    const [currentOldPassword, setCurrentOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {

        document.title = 'PNC Cafe | Profile'
        let id_number = sessionStorage.getItem('idNumber')

        // Every time the user refresh the page or go to this page, we set the userIDNumber from the session storage and setUser to true.
        if (id_number) {
            setUserIDNumber(id_number);
            setUser(true)
        }
        setQuantity(1); // when this page reloads or refreshed, we set the global state quantity to 1.
        

        // fetch the profile info of the specified user based on ID Number.
        // we fetch it from the route user-id
        // we use post method because we want to put a value in our request.
        fetch('http://localhost:3001/user-id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userIDNumber: id_number})
        })
        .then(res => res.json())
        .then(data => {

            console.log(JSON.parse(data)) // for testing

            const parsedData = JSON.parse(data)
            // Set all the values.

            if (emailDisabled)
                setEmail(JSON.parse(data)[0]['email'])
            
            if (contactDisabled)
                setContactNumber(JSON.parse(data)[0]['mobile_number'])
            setPassword(JSON.parse(data)[0]['password'])
            setCurrentOldPassword(JSON.parse(data)[0]['password'])
            setImagePath(JSON.parse(data)[0]['profile_image_path'])
            setFullName(parsedData[0]['given_name'] + " " + parsedData[0]['middle_name'] + " " + parsedData[0]['last_name'])
        })

    }, [cancelEditing, isEditingDone])

    // Function that change the profile info.
    function changeProfileInfo() {

        if (contactNumber.length > 11 || contactNumber.length < 11) {

            setErrorMessage('Invalid Contact Number. Please provide an 11-digit number. E.g. 09********2')
            return;
        }

        if (isPasswordToBeEdit) {
            
            /** Check if the password that typed of user is 
             * equal to the old password. */
            if (currentOldPassword !== oldPassword) {
                setErrorMessage('Old password is incorrect')
                return;
            }
            /** Check if the new password is equal to 
             * the confirmation password */
            else if (newPassword !== confirmPassword) {
                setErrorMessage('New Password does not match.')
                return;
            }
        }

        // Get the image base name (E.g. Image.jpg, Chloe.png).
        let image = document.querySelector('#profile-pic').value;

        fetch('http://localhost:3001/update-with-id', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'},

            /**
             * If the newPassword state is not empty,
             * then we know that the user wants to 
             * edit his/her password.
             * 
             * if not, then we set the 'password' state
             * as 'newPassword' because it is the same as 
             * what the user old password is.
             */
            body: newPassword ? JSON.stringify({email, contactNumber, newPassword, image, userIDNumber}) : JSON.stringify({email, contactNumber, newPassword: password, image, userIDNumber})
        })
        .then(res => res.json())
        .then(data => {
            
            setEditingDone(true)
            setEmailDisabled(true)
            setPasswordDisabled(true)
            setContactDisabled(true)
            setPasswordToBeEdit(false)
            setOldPassword('')
            setNewPassword('')
            setConfirmPassword('')

            setTimeout(() => {
                navigate('/profile')
                setEditingDone(false)
            }, 2000)
        })
    }

    return (

        <> {isUser && <div className="card justify-center items-center bordered border h-max overflow-auto">

            <div className="justify-center py-4 items-center gap-5 sm:max-w-sm md:max-w-md w-full">
                
                <form  
                    onSubmit={(e) => {
                        
                        e.preventDefault();
                        
                        changeProfileInfo();

                    }} className="card-body  p-3 md:p-8 justify-center items-center gap-5 sm:max-w-sm md:max-w-md w-full">

                    {/* Change Profile Picture Button */}
                    <section className="text-center flex flex-col gap-3 justify-center">
                        <div className="avatar online m-auto z-0">
                            <div className="rounded-full w-24 h-24">
                                <img src={imagePath === 'none' ? `../../assets/UserDefaultPhoto.png` : `../../assets/${imagePath}`} alt="profile"/>
                            </div>
                        </div> 
                        <p className="text-pnc font-medium text-xl text-center break-all">{fullName}</p>
                        <label className="cursor-pointer text-pnc font-medium" htmlFor="profile-pic">Change Profile Picture</label>
                        <input onChange={() => changeProfileInfo()} className="invisible" type="file" name="profile-pic" id="profile-pic" />
                    </section>

                    {/* Email */}
                    <section className="w-full flex  items-center gap-3">
                        <ProfileInput 
                            inputDisabled={emailDisabled} 
                            onEdit={() => setEmailDisabled(false)} 
                            onCancel={() => {
                                setEmailDisabled(true)
                                setErrorMessage('')
                                setCancelEditing(!cancelEditing)
                                setContactNumber(contactNumber)
                            }} 
                            onChange={(e) => {
                                
                                setEmail(e.target.value)
                                setErrorMessage('')
                            }}
                            value={email} 
                            htmlFor="email" type="text"/>
                    </section>

                    {/* Contact Number */}
                    <section className="w-full flex items-center gap-3">
                        <ProfileInput 
                            inputDisabled={contactDisabled} 
                            onEdit={() => setContactDisabled(false)} 
                            onCancel={() => {
                                setContactDisabled(true)
                                setErrorMessage('')
                                setCancelEditing(!cancelEditing)
                                setEmail(prevEmail => prevEmail)
                            }} 
                            onChange={(e) => {
                                
                                setContactNumber(e.target.value)
                                setErrorMessage('')
                            }}
                            value={contactNumber} 
                            htmlFor="contact-number" type="text"/>
                    </section>

                    {/* Password*/}
                    <section className="w-full  flex flex-col items-center gap-3">
                        <ProfileInput 
                            inputDisabled={passwordDisabled} 
                            onEdit={() => { 
                                setPasswordToBeEdit(true)
                                setPasswordDisabled(false)
                            }} 
                            onCancel={() => {
                                setPasswordToBeEdit(false)
                                setCancelEditing(!cancelEditing)
                                setPasswordDisabled(true)
                                setErrorMessage('')
                                setOldPassword('')
                                setNewPassword('')
                                setConfirmPassword('')
                            }} 
                            onChange={(e) => {
                                
                                setPassword(e.target.value)
                                setErrorMessage('')
                            }}
                            value={password} 
                            htmlFor="password" type="password"/>

                        {/* This div will show up when the user wants to change his/her password. */}
                        {isPasswordToBeEdit &&  <div className="w-full flex flex-col items-stretch gap-1">
                            
                            <InputContainer 
                                name="old-password" 
                                type="password" 
                                labelContent="Old Password"
                                value={oldPassword}
                                onChange={(e) => {
                                    setOldPassword(e.target.value)
                                    setErrorMessage('')
                                }}/>

                            <InputContainer 
                                name="new-password" 
                                type="password" 
                                labelContent="New Password"
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value)
                                    setErrorMessage('')
                                }}/>

                            <InputContainer 
                                name="confirm-password" 
                                type="password" 
                                labelContent="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                    setErrorMessage('')
                                }}/>
                        </div>}
                    </section>

                   {/* ALERTS */}
                   {isEditingDone && <SuccessAlert alertMessage="Changes Done" />}
                   {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}

                    <section className="w-full flex justify-end items-center card-actions">
                        <Button className="save-changes-btn" text="Save Changes"/>
                        <label className="delete-account-btn" htmlFor="account-delete-modal">Delete Account</label>
                        <input className="modal-toggle" type="checkbox" name="account-delete-modal" id="account-delete-modal" />
                        <DeleteAccountModal />
                    </section>
                </form>
                
            </div>
            
        </div> } </>
    )
}

export default ProfilePage
