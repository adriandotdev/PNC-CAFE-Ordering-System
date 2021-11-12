import React from 'react'
import {Link} from 'react-router-dom'
import '../SCSS/loginForm.scss';
import InputContainer from '../components/InputContainer'
import Button from '../components/Button'

function Login() {
    return (
        <div className="h-screen flex justify-center items-center p-3">
            <div className="max-w-md w-full m-auto">
            <h1 className="font-bold text-xl md:text-2xl text-pnc">Login</h1>
                <form className="form-control " action="">
                
                    {/* INPUT FIELDS */}
                    <InputContainer name="id-number" type="text" labelContent="ID Number"/>
                    <InputContainer name="password" type="password" labelContent="Password"/>

                    {/* Login Button */}
                    <section>
                        <Button className="btn bg-pnc w-full hover:bg-pncHover text-lg font-medium text-white md:text-xl" text="Login"/>
                    </section>

                    {/* Link Section */}
                    <section className="flex flex-col items-center self-center mt-2">
                        <small className="text-pnc font-medium text-center sm:text-base">Don't have an account yet? <Link to="/" className="text-pncHover">Sign Up</Link> </small>
                        
                        <small className="text-pnc font-medium text-center sm:text-base" ><Link to="/">Forgot password?</Link></small>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Login
