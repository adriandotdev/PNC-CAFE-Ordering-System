import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import {CheckoutContext} from '../contexts/CheckoutContext'
import Button from '../components/Button'
import InputContainer from '../components/InputContainer'

function CheckoutModal() {

    const navigate = useNavigate()
    // State of this modal 
    const [additionalInfo, setAdditionalInfo] = useState({
        location: '',
        desiredTime: '',
        paymentMethod: 'Cash On Delivery'
    })

    const { subTotal } = useContext(UserContext)
    const { checkout, setCheckout } = useContext(CheckoutContext)

    /** Check if all the values of the additionalInfo is not empty */
    const checkValuesIfEmpty = () => {

        const value = Object.values(additionalInfo).some(value => value.length < 1)
        
        return value;
    }
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
                        value={additionalInfo.location}
                        onChange={(e) => setAdditionalInfo({...additionalInfo, location: e.target.value})}
                        />

                        <fieldset className="border border-pnc form-control p-2 rounded-md">
                            <label className="font-medium" htmlFor="desired-time">Desired Time</label>
                            <input value={additionalInfo.desiredTime} onChange={(e) => setAdditionalInfo({...additionalInfo, desiredTime: e.target.value})} type="time" name="desired-time" id="desired-time" min="09:00" max="18:00"/>  
                        </fieldset>
                                       
                        <fieldset className="border border-pnc p-2 form-control rounded-md" >
                             <label className="font-medium" htmlFor="payment-method">Payment Method</label>
                            <select value={additionalInfo.paymentMethod} onChange={(e) => setAdditionalInfo({...additionalInfo, paymentMethod: e.target.value})} id="payment-method">
                                <option value="Cash On Delivery" className="value">
                                    Cash On Delivery
                                </option>
                                <option value="Pick-Up" className="value">
                                    Pick-Up
                                </option>
                            </select>
                        </fieldset>


                        {/* All of the Modal Action */}
                        <div className="modal-action">
                            <label className="button" htmlFor="checkout-modal">
                                <Button className="button" text="Confirm" onClick={() => {

                                    if (!checkValuesIfEmpty()) {
                                        setCheckout({...checkout, subTotal: subTotal, otherDetails: additionalInfo})
                                        navigate('/checkout')
                                    }
                                        
                                }}/>
                            </label>
                            <label onClick={() => setAdditionalInfo({location: '', desiredTime: '', paymentMethod: 'Cash On Delivery'})} className="admin-delete-btn" htmlFor="checkout-modal">Cancel</label>
                        </div>
                </div>

                
            </div>
        </>
    )
}

export default CheckoutModal
