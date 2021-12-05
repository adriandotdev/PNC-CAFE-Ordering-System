import React, {useState, useEffect} from 'react'
import CheckedOutItem from '../components/CheckedOutItem'

function Invoice({orderDetails, referenceFor="invoice"}) {
    
    const [subTotal, setSubTotal] = useState(0);
    let total = 0;

    useEffect(() => {

        if (orderDetails !== null) {
            console.log(orderDetails) // for testing
            JSON.parse(orderDetails.items).forEach(item => {

                total += item.menuPrice * item.quantity;
            })
        }

        setSubTotal(total)
    })

    const formattedPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(price)
    }

    return (
        <>
            <input type="checkbox" className="modal-toggle" id={referenceFor}/>
            <div className="modal">

                <div className="modal-box flex flex-col items-stretch gap-3">
                    <h1 className="text-pnc text-2xl lg:text-3xl">Invoice</h1>

                    {/* Order Details */}
                    <div className="flex flex-col items-stretch gap-3 border-pnc border-b pb-3">
                        <p className="text-pnc font-medium text-xl">Order Details</p>

                        <section>
                            <p><span className="text-pnc font-medium">Order ID:</span> {orderDetails !== null && orderDetails.order_id}</p>
                            <p><span className="text-pnc font-medium">Order Date:</span> {orderDetails !== null && orderDetails.order_date}</p>
                        </section>
                    </div>

                    {/* Items */}
                    <div className="flex flex-col items-stretch gap-3">
                        <h1 className="text-pnc text-2xl lg:text-3xl">Items</h1>

                         <div className="flex flex-col items-stretch pb-3 border-pnc border-b border-dashed">
                            {
                                orderDetails !== null && JSON.parse(orderDetails.items).map(item => {
                                    console.log(item)
                                    
                                    return (
                                        <CheckedOutItem key={item.orderID} menu={item.menu} quantity={item.quantity} price={item.menuPrice}/>
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
