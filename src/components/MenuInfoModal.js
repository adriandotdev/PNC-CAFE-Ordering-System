import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import Button from '../components/Button'

function MenuInfoModal() {

    const[,, menuID,, quantity, setQuantity] = useContext(UserContext)
    const [currentMenu, setCurrentMenu] = useState([])

    useEffect(() => {

        fetch('http://localhost:3001/get-menu-id', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({menuID})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCurrentMenu(JSON.parse(data))
        })
    }, [menuID])

    return (
        <>
            <input type="checkbox" name="menu-info-modal" id="menu-info-modal" className="modal-toggle" />  
            <div className="modal">
                <div className="modal-box card">
                    <figure>
                            <img src={`../../assets/${currentMenu.length > 0 && currentMenu[0]['image_path']}`} alt="photo of food" />
                    </figure>
                    <div className="card-body bordered border">
                        
                        {/* Menu Name */}
                        <h1 className="card-title titles">{currentMenu.length > 0 && currentMenu[0]['menu']}</h1>
                        
                        {/* Price */}
                        <p className="text-3xl">${currentMenu.length > 0 && currentMenu[0]['menu_price']}</p>

                        {/* Description */}
                        <small className="break-words max-h-32 overflow-auto font-medium text-base">{currentMenu.length > 0 && currentMenu[0]['menu_desc']}</small>

                        <div className="card-actions">

                            <Button className="button" text="Add to Bag"/>

                            <div className="flex gap-3">
                                <p className="font-bold">Qty: </p>
                                <section className="btn-group">
                                    <Button onClick={() => setQuantity(prevQty => prevQty > 1 ? prevQty - 1 : prevQty)} className="qty-btn" text="-"/>
                                    <Button className="quantity" text={quantity} />
                                    <Button onClick={() => setQuantity(prevQty => prevQty + 1)} className="qty-btn" text="+"/>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="modal-action">
                        <label onClick={() => setQuantity(1)} htmlFor="menu-info-modal" class="button">Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuInfoModal
