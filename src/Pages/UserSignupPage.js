import React from 'react'
import {Link} from 'react-router-dom'
import InputContainer from '../components/InputContainer'
import Button from '../components/Button'

// User sign up page
function UserSignupPage() {
    return (
        <div className="hero flex-col items-start mt-12 lg:mt-0 lg:items-center ">
            
            <div className="hero-content max-w-4xl w-full">

                <div className="card lg:p-5 lg:bordered lg:border max-w-md w-full">

                    <h1 className="card-title font-bold text-xl md:text-2xl text-pnc">Sign Up</h1>

                    <form action="" className="form-control">
                        <InputContainer name="id-number" type="text" labelContent="ID Number"/>

                        <InputContainer name="password" type="password" labelContent="Password"/>

                        <InputContainer name="confirm-password" type="password" labelContent="Confirm Password"/>

                        <section>
                            <Button className="globalButtons" text="Sign Up"/>
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

export default UserSignupPage
