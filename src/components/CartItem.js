import React, { useState, useEffect, useContext } from 'react';
import DeleteItemModal from '../components/DeleteItemModal';
import { UserContext } from '../contexts/UserContext';
import { CheckoutContext } from '../contexts/CheckoutContext';
import QuantityButton from '../components/QuantityButton'

function CartItem({isAllClicked, setAllClicked, selectAll, setAllSelected, menu, image, menuPrice, menuID, quantity}) {

    const {checkout, setCheckout} = useContext(CheckoutContext);
    const {userIDNumber, setAddedToCart, subTotal, bagTotal, setSubTotal} = useContext(UserContext);
    
    const [isChecked, setChecked] = useState(false)
    const [currentQty, setCurrentQty] = useState(quantity)

    async function deleteItem() {

        await fetch('http://localhost:3001/remove-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userIDNumber, menuID})
        })

        setAddedToCart(true)

        /** If the user wants to delete the item, 
         * if it is checked, then we subtract the total
         * of a deleted item. */
        if (isChecked) {

            setSubTotal(prevValue => prevValue - menuPrice * quantity)
        }
    }
    
    /** Add Item that the user wants to
     * checkout. */
    const addItem = () => {

        const prevItems = checkout.items;

        setCheckout(prevValue => {
            return {...prevValue, items: [...prevItems, {menuID, menu, menuPrice, quantity}]}
        })
    }

    /** Remove Item from the user item's
     * list to checkout. */
    const removeItem = () => {

        const newItems = checkout.items.filter(item => (item.menuID !== menuID))

        setCheckout(prevValue => {
            return {...prevValue, items: newItems.length > 0 ? newItems : []}
        })
    }

    useEffect(() => {

        // If the user checks the 'Select All'
        if (selectAll)
            setChecked(selectAll)
        /** And if the user selects the 'Select All' button and results to false, and the isAllClicked is true
         * which is the basis that the user actually selects the 'Select All' button, then we set the
         * isChecked of all of the items to false. */
        else if (selectAll === false && isAllClicked) {
            setChecked(false)
        }
            
    }, [selectAll]);
    
    // JSX
    return (

            <div className="w-full flex gap-4 p-2 h-max border-b">
                {/* img */}
                <section className="md:w-4/12 h-full w-max flex justify-between items-center gap-2 flex-shrink-0 flex-grow mr-6">
                    <input onChange={() => {
                        
                        setChecked(!isChecked) // set the value from the opposite of the current value.
                        setAllClicked(false) // we set it to false to avoid setting up the checkbox of all items to false.

                        // since the isAllClicked is false, we can set the selectAll to false.
                        if (selectAll)
                            setAllSelected(false)

                        !isChecked ? setSubTotal(prevValue => prevValue + menuPrice * quantity) : setSubTotal(prevValue => prevValue - menuPrice * quantity)

                        !isChecked ? addItem() : removeItem()
                    }} checked={isChecked} className="checkbox p-3 checkbox-color" type="checkbox" name="" id="" />
                    <img className="hidden md:block h-max rounded-md" src={`../../assets/${image}`} alt="" />
                </section>

                {/* details */}
                <section className="w-full flex flex-col gap-3 md:gap-6">
                    {/* Title, Description and x button */}
                    <div className="flex justify-between">
                        <section>
                            <h1 className="cart-menu-title">{menu}</h1>
                        </section>
                        <label htmlFor={menuID}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>
                    </div>
                    <section className="flex justify-between flex-wrap gap-3">

                        {/* Price */}
                        <h1 className="text-pnc text-xl md:text-2xl font-medium">{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(menuPrice)}</h1>

                        {/* Quantity Button */}
                        <QuantityButton 
                        menuID={menuID}
                        quantity={currentQty} 
                        increase={() => {
                            fetch('http://localhost:3001/add-quantity', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({userIDNumber, menuID, newQty: (currentQty + 1)})
                            })
                            .then(res => res.json())
                            .then(data => {
                                setCurrentQty(prevValue => prevValue + 1)
                                setSubTotal(prevValue => isChecked && prevValue + menuPrice)
                                setAddedToCart(true)
                            })
                        }}
                        decrease={() => { 

                            if (currentQty !== 1) {
                                fetch('http://localhost:3001/add-quantity', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({userIDNumber, menuID, newQty: (currentQty - 1)})
                                })
                                .then(res => res.json())
                                .then(data => {
                                    setCurrentQty(prevValue => prevValue - 1)
                                    setSubTotal(prevValue => prevValue > 0 && prevValue - menuPrice)
                                    setAddedToCart(true)
                                })
                            }
                        }}/>

                        <DeleteItemModal userIDNumber={userIDNumber} menuID={menuID} isChecked={isChecked} menuPrice={menuPrice} quantity={quantity}/>
                    </section>
                </section>
            </div>
    )
}

export default CartItem
