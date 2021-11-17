import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../SCSS/loginForm.scss';
import InputContainer from '../components/InputContainer'
import Button from '../components/Button'
import ErrorAlert from '../components/ErrorAlert'

function UserLoginPage({setUser}) {

    let navigate = useNavigate();
    const [IDNumber, setIDNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const idNumber = '1900120'
    const pass = 'password'

    return (
        <div className="hero mt-12 flex flex-col lg:mt-0 lg:justify-center lg:items-center lg:flex-row lg:p-12">
            
            {/* Title Section */}
             <div className="hero-content flex-col lg:items-start gap-3 flex-shrink-0 z-auto">
                    <h1 className="text-2xl text-pnc font-bold lg:text-4xl xl:text-6xl text-center">Welcome to PNC Cafe</h1>
                    <p className="font-medium text-pnc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </div>

            {/* Login Form */}
            <div className="hero-content flex flex-col max-w-4xl w-full">
               
                <div className="card lg:bordered lg:border lg:p-5 max-w-md w-full">
                    <h1 className="card-title font-bold text-xl md:text-2xl text-pnc text-center lg:text-left">Login</h1>
                    <form className="form-control " action="" onSubmit={(e) => e.preventDefault()}>
                    
                        {/* INPUT FIELDS */}
                        <InputContainer name="id-number" type="text" labelContent="ID Number" value={IDNumber} onChange={(e) => {
                            setIDNumber(e.target.value)
                            setErrorMessage('')
                        }}/>

                        <InputContainer name="password" type="password" labelContent="Password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                            setErrorMessage('')
                        }}/>

                        {/* Login Button */}
                        <section>
                            <Button onClick={() => {
                                /**
                                 * Query the id number and password that given by the user. 
                                 * 
                                 * evaluate if it is equal 
                                 * 
                                 * if given id number doesn't have a match at the database 
                                 *   - message = 'ID Number doesn't exist'
                                 * 
                                 * if given password is incorrect
                                 *  - message = 'Password incorrect'
                                 */
                                

                                if (!IDNumber || !password) {
                                    setErrorMessage('Please provide ID Number and Password'); return;
                                } else if (IDNumber !== idNumber) {
                                    setErrorMessage('ID Number doesn\'t exist'); return;
                                }
                                else if (password !== pass) {
                                    setErrorMessage('Incorrect Password'); return;
                                }  else {
                                    setErrorMessage('')
                                    setUser(true)
                                    window.sessionStorage.setItem('isUser', 'true');
                                    navigate("/homepage", {replace: true})
                                }
                            }} 
                            className="globalButtons" 
                            text="Login"/>
                        </section>

                        {/* Link Section */}
                        <section className="flex flex-col items-center self-center mt-2">
                            <small className="text-pnc font-medium text-center sm:text-base">Don't have an account yet? <Link to="/signup" className="text-pncHover">Sign Up</Link> </small>
                            
                            <small className="text-pnc font-medium text-center sm:text-base" ><Link to="/">Forgot password?</Link></small>
                        </section>
                    </form>
                </div>
                {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}
            </div>
            
        </div>
    )
}

export default UserLoginPage
