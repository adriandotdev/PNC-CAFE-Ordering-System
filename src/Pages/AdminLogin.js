import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Textfield from '../components/Textfield'
import Label from '../components/Label'
import Button from '../components/Button'
import ErrorAlert from '../components/ErrorAlert'

function AdminLogin({setAdmin}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setError] = useState(false)

    useEffect(() => {

        document.title = 'PNC Cafe | Admin'
    }, [])

    // A function that verifies the admin.
    const verifyAdmin = () => {

        fetch('http://localhost:3001/verify-admin', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {

            console.log(JSON.parse(data))
            if (JSON.parse(data).length > 0) {
                setAdmin(true);
                window.sessionStorage.setItem('isAdmin', 'true');
                window.location.replace('http://localhost:3000/admin/users')
            } else {
                setError(true)
            }
        })
    }

    return (
        <div className="hero w-screen">
        
            <div className="hero-content md:max-w-4xl w-full">

                <div className="card  md:shadow-md md:bordered md:max-w-md w-full">
                    
                    <div className="p-0 md:p-8">
                        
                        <h1 className="card-title">Hello, Admin</h1>
                        <form action="" onSubmit={(e) => {

                            e.preventDefault()

                            verifyAdmin()
                        }}>

                            <section className="input-container flex flex-col relative">
                                <Textfield value={username} onChange={(e) => {

                                    setError(false)
                                    setUsername(e.target.value);
                                }} props={{type: "text", name: "username"}}/>
                                <Label props={{name: "username", labelContent: "Username"}}/>
                            </section>

                            <section className="input-container flex flex-col relative">
                                <Textfield value={password} onChange={(e) => {

                                    setPassword(e.target.value)
                                    setError(false)
                                }} props={{type: "password", name: "password"}}/>
                                <Label props={{name: "password", labelContent: "Password"}}/>
                            </section>

                            <section className="input-container flex flex-col relative">
                                <Button className="globalButtons w-full" text="Login"/>
                            </section>

                            <section class="flex flex-col">
                                <Link className="text-pnc font-medium text-center" to="">Forgot password?</Link>
                            </section>

                            {isError && <ErrorAlert errorMessage={"Incorrect Password"}/>}
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
