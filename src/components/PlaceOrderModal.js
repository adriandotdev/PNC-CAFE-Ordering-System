import React from 'react'

function PlaceOrderModal({PlaceOrder}) {
    return (
        <>
            <input type="checkbox" id="place-order-modal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box">
                    <p className="text-pnc font-bold text-xl">Place order?</p>
                    <small className="text-base font-medium">You can view your orders at "Your Orders" section.</small>

                    <div className="modal-action">
                        <label
                            onClick={() => {
                                PlaceOrder()
                            }}
                            htmlFor="place-order-modal" className="button">Confirm</label>
                        <label htmlFor="place-order-modal" className="button-no-color">Cancel</label>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default PlaceOrderModal
