import React, {useState, useEffect} from 'react'
import CheckedOutItem from '../components/CheckedOutItem'

function Invoice({orderDetails, referenceFor="invoice"}) {
    
    const [userInfo, setUserInfo] = useState([])
    const [subTotal, setSubTotal] = useState(0);

    /** Formats the price into Philippine Peso */
    const formattedPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(price)
    }

    /** Gets the user info
     * based on the specified user ID number. */
    const getUserInfo = () => {

        fetch('http://localhost:3001/user-id', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userIDNumber: orderDetails.id_number})
        })
        .then(res => res.json())
        .then(data => setUserInfo(JSON.parse(data)))
        
    }

    /** For every render
     * compute the subtotal */
    useEffect(() => {

        let total = 0;
        
        if (orderDetails !== null) {

            // Loop for each item and get the menuPrice and quantity properties
            JSON.parse(orderDetails.items).forEach(item => {

                total += item.menuPrice * item.quantity;
            })
            getUserInfo(); // we put this here to avoid null pointer exception
            
        }
        setSubTotal(total)
    }, [orderDetails])

    return (
        <>
            <input type="checkbox" className="modal-toggle" id={referenceFor}/>
            <div key={orderDetails !== null && orderDetails.order_id} className="modal">

                <div className="modal-box flex flex-col items-stretch gap-3 max-h-96 overflow-auto md:max-h-full">
                    <h1 className="text-pnc text-2xl lg:text-3xl">Invoice</h1>

                    {/* Order Details */}
                    <div className="flex flex-col items-stretch gap-3 border-pnc border-b pb-3">
                        <p className="text-pnc font-medium text-xl">Order Details</p>

                        <section>
                            <p><span className="text-pnc font-medium">Order ID:</span> {orderDetails !== null && orderDetails.order_id}</p>
                            <p><span className="text-pnc font-medium">Order Date:</span> {orderDetails !== null && orderDetails.order_date}</p>
                        </section>

                        <section>
                            {/* Payment Method */}
                            <p><span className="text-pnc font-medium">Payment Method:</span> {orderDetails !== null && JSON.parse(orderDetails.order_details).paymentMethod}</p>

                            {/* Desired Time */}
                            <p><span className="text-pnc font-medium">Desired Time:</span> {orderDetails !== null && JSON.parse(orderDetails.order_details).desiredTime}</p>

                            {/* Location */}
                            <p><span className="text-pnc font-medium">Location:</span> {orderDetails !== null && JSON.parse(orderDetails.order_details).location || 'N/A'}</p>
                        </section>
                    </div>

                    {/* Customer Info */}
                    { userInfo.length > 0 && <div className="flex flex-col items-stretch gap-3">

                        <section>
                            <p><span className="text-pnc font-medium">To:</span> {`${userInfo[0].given_name} ${userInfo[0].middle_name} ${userInfo[0].last_name}`} </p>
                        </section>
                        
                    </div> }

                    {/* Items */}
                    <div className="flex flex-col items-stretch gap-3">
                        <h1 className="text-pnc font-medium text-xl">Items</h1>

                         <div className="flex flex-col items-stretch pb-3 border-pnc border-b border-dashed">
                            {
                                orderDetails !== null && JSON.parse(orderDetails.items).map(item => {
    
                                    return (
                                        // The key is the menuID
                                        <CheckedOutItem key={item.menuID} menu={item.menu} quantity={item.quantity} price={item.menuPrice}/>
                                    )
                                    
                                })
                            }
                        </div>
                    </div>
                   
                    {/* Subtotal */}
                    <div className="flex flex-col items-stretch">

                        {/* Subtotal */}
                        <section className="flex justify-between items-center">
                            <p><span className="text-pnc font-medium">Subtotal:</span></p>
                            <p className="font-bold">{formattedPrice(subTotal)}</p>
                        </section>

                        {/* Delivery Fee */}
                        { 
                            orderDetails !== null && JSON.parse(orderDetails.order_details).paymentMethod === 'Cash On Delivery' 
                            && <section className="flex justify-between items-center">
                                <p className="text-pnc font-medium">Delivery Fee:</p>
                                <span className="font-bold">PHP 10.00</span>
                            </section> 
                        }
                        
                        {/* Total Payment */}
                        <section className="flex justify-between items-center">
                            <p><span className="text-pnc font-medium">Total Payment:</span></p>
                            
                            <p className="font-bold">{orderDetails !== null && formattedPrice(JSON.parse(orderDetails.order_details).paymentMethod === 'Cash On Delivery' ? subTotal + 10 : subTotal)}</p>
                        </section>
                    </div>
                    <div className="modal-action">
                        <label className="button" htmlFor={referenceFor}>Close</label>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Invoice
