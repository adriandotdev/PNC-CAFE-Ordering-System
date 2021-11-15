import React from 'react'
import {Link} from 'react-router-dom'
import Textfield from '../components/Textfield'
import Label from '../components/Label'
import Button from '../components/Button'

function AdminLogin({setAdmin}) {
    return (
        <div className="hero w-screen">
            

            <div className="hero-content max-w-4xl w-full">

                <h1></h1>

                <div className="card bordered shadow-md max-w-md w-full">
                    
                    <div className="card-body">
                        
                        <h1 className="card-title">Hello, Admin</h1>
                        <form action="">

                            <section className="input-container flex flex-col-reverse relative">
                                <Textfield props={{type: "text", name: "username"}}/>
                                <Label props={{name: "username", labelContent: "Username"}}/>
                            </section>

                            <section className="input-container flex flex-col-reverse relative">
                                <Textfield props={{type: "password", name: "password"}}/>
                                <Label props={{name: "password", labelContent: "Password"}}/>
                            </section>
                            
                            <section className="card-actions input-container flex flex-col-reverse relative">
                                <Button onClick={() => {
                                        setAdmin(true);
                                        window.sessionStorage.setItem('isAdmin', 'true');
                                        window.location.assign('http://localhost:3000/admin/users')
                                    }} className="globalButtons w-full" text="Login"/>
                            </section>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
