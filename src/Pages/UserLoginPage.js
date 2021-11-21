import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import {Link, useNavigate} from 'react-router-dom'
import '../SCSS/loginForm.scss';
import InputContainer from '../components/InputContainer'
import Button from '../components/Button'
import ErrorAlert from '../components/ErrorAlert'

function UserLoginPage({setUser}) {

    let navigate = useNavigate();
    const [,setUserIDNumber] = useContext(UserContext)
    const [IDNumber, setIDNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [receivedData, setReceivedData] = useState([]);

    function authenticate() {

        fetch('http://localhost:3001/get-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({IDNumber})
        })
        .then(res => res.json())
        .then(data => {

            // if data is not empty
            if (JSON.parse(data))
                setReceivedData(JSON.parse(data)) // triggers re-render          
        })
    }

    /**
     * NOTE: ONLY RUNS WHEN THE 'receivedData' value changes.
     */
    useEffect(() => {

        // Check if the input field of ID Number and Password are not empty.
        if (IDNumber && password) {

            /** Check if the ID Number and Password entered by user is equal to the received data's id number and password. */
            if (receivedData.length > 0 && (password === receivedData[0]['password'] && IDNumber === receivedData[0]['id_number'])){

                setUser(true)
                setErrorMessage('')
                setUserIDNumber(IDNumber)
                window.sessionStorage.setItem('isUser', 'true'); // set the session storage to determine if the user hasn't logged out yet.
                window.sessionStorage.setItem('idNumber', `${IDNumber}`) // set the session storage to determine the id number of the user.
                navigate("/homepage")
            } else {
                setErrorMessage('ID Number and password does not match')
            }
        }
        
    }, [receivedData])

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
                    <form className="form-control " onSubmit={(e) => {
                        
                        e.preventDefault()
                    
                       // If both are not empty, authenticate
                       if (IDNumber && password)
                            authenticate()
                    }}>
                    
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

                                // Check if the required fields (ID Number and Password) are not empty.
                                if (!IDNumber || !password)
                                    setErrorMessage('Please provide the required fields.')
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
