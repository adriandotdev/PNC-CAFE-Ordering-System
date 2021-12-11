import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import InputContainer from '../components/InputContainer'
import Button from '../components/Button'
import ErrorAlert from '../components/ErrorAlert'

// User sign up page
function UserSignupPage() {

    let navigate = useNavigate()

    // States of this page.
    const [IDNumber, setIDNumber] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    /** Add the user to the database */
    async function addUser() {

        const res = await fetch('http://localhost:3001/add-user', {

            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({IDNumber, password, email, mobileNumber})
        })

        const data = await res.json()

        if (JSON.parse(data).status === 200) {

            alert('Successfully registered!')
            navigate('/', {replace: true}) // navigate to the given url and replace the current active window.
        }  
    }

    /** Checks if the user is already registered */
    async function isAlreadyRegistered() {

        const res = await fetch('http://localhost:3001/get-user', {
                                method: 'POST', 
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({IDNumber})
                            })
        const data = await res.json()

        if (JSON.parse(data).length > 0) {

            setErrorMessage('ID Number Already Registered')
        } 
        else if (mobileNumber.length > 11 || mobileNumber.length < 11) {
            setErrorMessage('Mobile Number is invalid. Please provide an 11-digit number starting at 09.')
        }
        else {

            if (password !== confirmationPassword)
                setErrorMessage('Password doesn\'t match');
            else
                addUser()
        }
    }

    /** Verify if the ID Number is existing at the school database. (ONLY STAFFS, STUDENTS, TEACHERS OF PNC CAN USE THIS APP) */
    async function verify_user () {

        const res = await fetch('http://localhost:3001/verify-user', {
                                method: 'POST', 
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({IDNumber})
                            })
        const data = await res.json()

        if (JSON.parse(data).length > 0) {

            isAlreadyRegistered()
        } else {
            setErrorMessage('ID Number is invalid.')
        }
    }

    return (
        <div className="hero flex-col items-start mt-12 lg:mt-0 lg:items-center ">
            
            <div className="hero-content max-w-4xl w-full">

                <div className="card lg:p-5 lg:bordered lg:border max-w-md w-full">

                    <h1 className="card-title font-bold text-xl md:text-2xl text-pnc">Sign Up</h1>
                    
                    <form autoComplete="off"  className="form-control" onSubmit={(e) => {

                            e.preventDefault()
                            verify_user()
                        }}>

                        <InputContainer name="id-number" type="text" labelContent="ID Number" value={IDNumber} 
                        onChange={
                            (e) => { 
                                setIDNumber(e.target.value)
                                setErrorMessage('') 
                            }
                        }/>

                        <InputContainer name="email" type="email" labelContent="Email" value={email} onChange={
                            (e) => { 
                                setEmail(e.target.value)
                                setErrorMessage('') 
                            }
                        }/>

                        <InputContainer name="mobile-number" type="number" labelContent="Mobile Number" value={mobileNumber} onChange={
                            (e) => { 
                                setMobileNumber(e.target.value)
                                setErrorMessage('') 
                            }
                        }/>

                        <InputContainer name="password" type="password" labelContent="Password" value={password} 
                        onChange={
                            (e) => { 
                                setPassword(e.target.value)
                                setErrorMessage('') 
                            }
                        }/>

                        <InputContainer name="confirm-password" type="password" labelContent="Confirm Password" value={confirmationPassword} 
                        onChange={(e) => {

                            setConfirmationPassword(e.target.value)
                            setErrorMessage('') 
                           }
                        }/>

                        <section>
                            <Button className="globalButtons" text="Sign Up"/>
                        </section>

                        <section className="flex justify-center mt-2">
                            <small className="text-pnc font-medium text-center sm:text-base my-3">Already have an account? <Link to="/" className="text-pncHover">Log In</Link> </small>
                        </section>
                    </form>

                    {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}
                </div>
            </div>
        </div>
    )
}

export default UserSignupPage
