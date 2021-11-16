import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import InputContainer from '../components/InputContainer'
import Button from '../components/Button'
import ErrorAlert from '../components/ErrorAlert'

// User sign up page
function UserSignupPage() {

    const [IDNumber, setIDNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
     
    return (
        <div className="hero flex-col items-start mt-12 lg:mt-0 lg:items-center ">
            
            <div className="hero-content max-w-4xl w-full">

                <div className="card lg:p-5 lg:bordered lg:border max-w-md w-full">

                    <h1 className="card-title font-bold text-xl md:text-2xl text-pnc">Sign Up</h1>

                    <form action="" className="form-control">

                        <InputContainer name="id-number" type="text" labelContent="ID Number" value={IDNumber} onChange={
                            (e) => setIDNumber(e.target.value)
                        }/>

                        <InputContainer name="password" type="password" labelContent="Password" value={password} onChange={
                            (e) => setPassword(e.target.value)
                        }/>

                        <InputContainer name="confirm-password" type="password" labelContent="Confirm Password" value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)}/>

                        <section>
                            <Button className="globalButtons" text="Sign Up" onClick={() => {

                                /**
                                 * kapag ang ID number ay already registered 
                                 * errorMessage = 'ID Number already have an account
                                 * 
                                 * kapag ang password and confirmation password is hindi matched
                                 * errorMessage ='Confirmation password does not match
                                 */
                            }}/>
                        </section>

                        <section className="flex justify-center mt-2">
                            <small className="text-pnc font-medium text-center sm:text-base">Already have an account? <Link to="/" className="text-pncHover">Log In</Link> </small>
                        </section>
                    </form>

                    {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}
                </div>
            </div>
        </div>
    )
}

export default UserSignupPage
