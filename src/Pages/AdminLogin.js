import React from 'react'
import {Link} from 'react-router-dom'
import Textfield from '../components/Textfield'
import Label from '../components/Label'
import Button from '../components/Button'

function AdminLogin({setAdmin}) {
    return (
        <div className="hero w-screen">
        
            <div className="hero-content md:max-w-4xl w-full">

                <div className="card  md:shadow-md md:bordered md:max-w-md w-full">
                    
                    <div className="p-0 md:p-8">
                        
                        <h1 className="card-title">Hello, Admin</h1>
                        <form action="">

                            <section className="input-container flex flex-col relative">
                                <Textfield props={{type: "text", name: "username"}}/>
                                <Label props={{name: "username", labelContent: "Username"}}/>
                            </section>

                            <section className="input-container flex flex-col relative">
                                <Textfield props={{type: "password", name: "password"}}/>
                                <Label props={{name: "password", labelContent: "Password"}}/>
                            </section>

                            <section className="input-container flex flex-col relative">
                                <Button onClick={() => {
                                        setAdmin(true);
                                        window.sessionStorage.setItem('isAdmin', 'true');
                                        window.location.assign('http://localhost:3000/admin/users')
                                    }} className="globalButtons w-full" text="Login"/>
                            </section>

                            <section class="flex flex-col">
                                <Link className="text-pnc font-medium text-center" to="">Forgot password?</Link>
                            </section>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
