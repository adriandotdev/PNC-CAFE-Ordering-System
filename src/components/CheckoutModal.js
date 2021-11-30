import React from 'react'
import {Link} from 'react-router-dom'
import InputContainer from '../components/InputContainer'

function CheckoutModal() {
    return (
        <>
            <input type="checkbox" className="modal-toggle" id="checkout-modal" />
            <div className="modal">
                
                <div className="modal-box flex flex-col items-stretch gap-3">

                    <section>
                        <h3 className="text-pnc text-2xl  font-bold">Please Provide Additional Info</h3>
                    </section>
                    <InputContainer 
                        name="location"
                        type="text"
                        labelContent="Location/Address"

                        />   
                        <fieldset className="border border-pnc form-control p-2 rounded-md">
                            <label className="font-medium" htmlFor="desired-time">Desired Time</label>
                            <input type="time" name="desired-time" id="desired-time" />  
                        </fieldset>
                                       
                        <fieldset className="border border-pnc p-2 form-control rounded-md" >
                             <label className="font-medium" htmlFor="payment-method">Payment Method</label>
                            <select id="payment-method">
                                <option value="" className="value">
                                    Cash On Delivery
                                </option>
                                <option value="" className="value">
                                    Pick-Up
                                </option>
                            </select>
                        </fieldset>


                        {/* All of the Modal Action */}
                        <div className="modal-action">
                            <label className="button" htmlFor="checkout-modal">
                                <Link to="/checkout">Confirm</Link>
                            </label>
                            <label className="admin-delete-btn" htmlFor="checkout-modal">Cancel</label>
                        </div>
                </div>

                
            </div>
        </>
    )
}

export default CheckoutModal
