import React, {useState, useEffect, useContext} from 'react'
import DeleteItemModal from '../components/DeleteItemModal'
import { UserContext } from '../contexts/UserContext'
import QuantityButton from '../components/QuantityButton'

function CartItem({selectAll, setAllSelected, menu, image, menuPrice, menuID, quantity}) {

    const {userIDNumber, setAddedToCart, subTotal, setSubTotal} = useContext(UserContext)
    const [isChecked, setChecked] = useState(selectAll)
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
        if (isChecked) {

            setSubTotal(prevValue => prevValue - menuPrice * quantity)
        }
    }
    
    useEffect(() => {
        
        setChecked(selectAll)
        if (selectAll) {
            setSubTotal(prevValue => prevValue + menuPrice * quantity)
        }
    }, [selectAll])
    return (

            <div className="w-full flex gap-4 p-2 h-max border-b">
                {/* img */}
                <section className="md:w-4/12 h-full w-max flex justify-between items-center gap-2 flex-shrink-0 flex-grow mr-6">
                    <input onChange={() => {
                        
                        setChecked(!isChecked)
                        !isChecked ? setSubTotal(prevValue => prevValue + menuPrice * quantity) : setSubTotal(prevValue => prevValue - menuPrice * quantity)
                    }} checked={isChecked} className="checkbox p-3 checkbox-color" type="checkbox" name="" id="" />
                    <img className="hidden md:block h-max rounded-md" src={`../../assets/${image}`} alt="" />
                </section>

                {/* details */}
                <section className="w-full flex flex-col gap-3 md:gap-6">
                    {/* Title, Description and x button */}
                    <div className="flex justify-between">
                        <section>
                            <h1 className="cart-menu-title">{menu}</h1>
                            {/* <small>w/ Hamburger</small> */}
                        </section>
                        <section>
                            <svg onClick={deleteItem} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </section>
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
