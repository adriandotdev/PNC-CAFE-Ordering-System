import React from 'react'
import '../SCSS/loginForm.scss';
import InputContainer from '../components/InputContainer'

function Login() {
    return (
        <div className="h-screen flex justify-center items-center p-3">
            <div className="max-w-md w-full m-auto">
            <h1 className="font-bold md:text-2xl text-pnc">Login</h1>
            <form className="form-control " action="">
                
                <InputContainer name="id-number" type="text" labelContent="ID Number"/>
                <InputContainer name="password" type="password" labelContent="Password"/>
                <section>
                    <button className="btn bg-pnc w-full hover:bg-pncHover text-lg font-medium text-white md:text-xl">Login</button>
                </section>
                </form>
            </div>
        </div>
    )
}

export default Login
