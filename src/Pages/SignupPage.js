import React from 'react'
import {Link} from 'react-router-dom'
import InputContainer from '../components/InputContainer'
import Button from '../components/Button'

function SignupPage() {
    return (
        <div className="hero h-screen flex-col items-start mt-12 lg:mt-0 lg:items-center ">
            
            <div className="hero-content max-w-4xl w-full">

                <div className="card lg:p-5 lg:bordered lg:border max-w-md w-full">

                    <h1 className="card-title font-bold text-xl md:text-2xl text-pnc">Sign Up</h1>

                    <form action="" className="form-control">
                        <InputContainer name="id-number" type="text" labelContent="ID Number"/>

                        <InputContainer name="password" type="password" labelContent="Password"/>

                        <InputContainer name="confirm-password" type="password" labelContent="Confirm Password"/>

                        <section>
                            <Button className="btn bg-pnc w-full hover:bg-pncHover text-lg font-medium text-white md:text-xl border-none" text="Sign Up"/>
                        </section>

                        <section className="flex justify-center mt-2">
                            <small className="text-pnc font-medium text-center sm:text-base">Already have an account? <Link to="/" className="text-pncHover">Log In</Link> </small>
                        </section>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default SignupPage
