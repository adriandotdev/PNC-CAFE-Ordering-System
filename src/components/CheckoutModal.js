import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import {CheckoutContext} from '../contexts/CheckoutContext'
import Button from '../components/Button'
import InputContainer from '../components/InputContainer'

/** This modal will pop up when the user
 * wants to checkout the selected menu.
 * 
 * Also, the user must select atleast
 * one menu to be able to proceed to checkout.*/
function CheckoutModal() {

    // UserContext
    const { subTotal } = useContext(UserContext)
    // CheckoutContext
    const { checkout, setCheckout } = useContext(CheckoutContext)
    // a hook that use to navigate to other page.
    const navigate = useNavigate()
    // State of this modal 
    const [additionalInfo, setAdditionalInfo] = useState({
        location: '',
        desiredTime: '',
        paymentMethod: 'Cash On Delivery'
    })
    const [isDelivery, setDelivery] = useState(true)

    /** Check if all the values of the additionalInfo is not empty */
    const checkValuesIfEmpty = () => {

        let value = false;
        
        /** Since only the 'Cash On Delivery' payment method
         * has the location, we check it so that we can determine
         * if all the fields is not empty by using the some() higher-order
         * function. */
        if (isDelivery)
            value = Object.values(additionalInfo).some(value => value.length < 1)
        else if (additionalInfo.desiredTime.length < 1)
            value = true

        if (!value) { // If all is filled out,
            navigate('/checkout', {replace: true}) // go to /checkout route.
            setCheckout({...checkout, subTotal: subTotal, otherDetails: {...additionalInfo, desiredTime: formatTime(additionalInfo.desiredTime)}})
        }
    }

    const formatTime = (time) => {

        const splitTime = String(time).split(':');
        let convertedTime = ''

        if (+splitTime[0] >= 24) {
            convertedTime = '12:00 AM'
        }
        else if (+splitTime[0] < 12) {
            convertedTime = `${splitTime[0]}:${splitTime[1]} AM`
        }
        else if (+splitTime[0] > 12)
            convertedTime = `${(+splitTime[0] - 12)}:${splitTime[1]} PM`

        return convertedTime;
    }
    return (
        <>
            <input type="checkbox" className="modal-toggle" id="checkout-modal" />
            <div className="modal">
                
                <div className="modal-box flex flex-col items-stretch gap-3">

                    {/* STEPS UI */}
                    <div className="overflow-x-auto">
                        <ul className="steps gap-5 sm:gap-0 w-full">
                            <li className="step step-accent break-word text-pnc font-medium">Required Info</li>
                            <li className="step text-pnc font-medium">Place Order</li>
                            <li className="step text-pnc font-medium">Pending</li>
                            <li className="step text-pnc font-medium">Order Received</li>
                        </ul>
                    </div>
                    

                    <section>
                        {/* <h3 className="text-pnc text-2xl  font-bold">Please Provide Additional Info</h3> */}
                    </section>

                    {/* Payment Method */}
                    <fieldset className="border border-pnc p-2 form-control rounded-md" >

                        <label className="font-medium" htmlFor="payment-method">Payment Method</label>
                        <select value={additionalInfo.paymentMethod} onChange={(e) => {

                                e.target.value === 'Cash On Delivery' ? setDelivery(true) : setDelivery(false)
                                setAdditionalInfo({...additionalInfo, paymentMethod: e.target.value})
                            
                            }} id="payment-method">
                            <option value="Cash On Delivery" className="value">
                                Cash On Delivery
                            </option>
                            <option value="Pick-Up" className="value">
                                Pick-Up
                            </option>
                        </select>
                    </fieldset>
                    
                    {/* Location (Only show up when the user choose a 'Cash On Delivery' option) */}
                     {isDelivery && <InputContainer 
                        name="location"
                        type="text"
                        labelContent="Location/Address"
                        value={additionalInfo.location}
                        onChange={(e) => setAdditionalInfo({...additionalInfo, location: e.target.value})}
                        /> }
                    
                    {/* Time */}
                    <fieldset className="border border-pnc form-control p-2 rounded-md">
                        <label className="font-medium" htmlFor="desired-time">Desired Time</label>
                        <input value={additionalInfo.desiredTime} onChange={(e) => setAdditionalInfo({...additionalInfo, desiredTime: e.target.value})} type="time" name="desired-time" id="desired-time" min="9:00" max="19:00"/>  
                    </fieldset>
                                       
                        

                        {/* All of the Modal Action */}
                        <div className="modal-action">
                            <label onClick={checkValuesIfEmpty} htmlFor="checkout-modal">
                                <Button className="button" text="Confirm" />
                            </label>
                            <label onClick={() => setAdditionalInfo({location: '', desiredTime: '', paymentMethod: 'Cash On Delivery'})} className="admin-delete-btn" htmlFor="checkout-modal">Cancel</label>
                        </div>
                </div>

                
            </div>
        </>
    )
}

export default CheckoutModal
