import React, {useState, useEffect, useContext} from 'react'
import {AdminMenuContext} from '../contexts/AdminMenuContext'
import Textfield from '../components/Textfield'
import Label from '../components/Label'
import ModalButton from './ModalButton'

function AddProductModal() {

    const {menuID, setMenuID, isEditing, setEditing} = useContext(AdminMenuContext) // Context of Admin Page
    
    const [menuName, setMenuName] = useState('');
    const [isAvailable, setAvailability] = useState(false); // menu description
    const [price, setPrice] = useState(0);
    
    /**
     * This is the function that adds the new menu to the database. */
    async function addMenu() {

        const image = document.querySelector('#image').value;

        await fetch('http://localhost:3001/add-menu', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { id: Date.now().toLocaleString(), menuName, price, isAvailable, image } )
        })

        setMenuID('') // to trigger the useEffect at MenuPage.js of Admin
    }

    /**
     * This function will fetch the menu based on menu id. */
    async function getMenuForUpdate() {

        const res = await fetch('http://localhost:3001/get-menu-id', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({menuID})
        })

        const data = await res.json()

        // This will setup the value of the selected menu to be edited.
        const menu = JSON.parse(data)
        setMenuName(menu[0]['menu'])
        console.log(menu[0]['status'])
        setAvailability(menu[0]['status'] === '1' ? true : false)
        setPrice(menu[0]['menu_price'])
    }

    /** A function that updates a selected menu. */
    async function update() {

        const image = document.querySelector('#image').value; 

        await fetch('http://localhost:3001/edit-menu', { 

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({menuID, menuName, isAvailable, price, image})
        })
    }

    /** A useEffect that triggers whenever 
     * the admin wants to edit a selected menu. */
    useEffect(() => {

        if (menuID)
            getMenuForUpdate();

    }, [isEditing])

    return (
        <>
            
            <div className="modal ">
                
                <form className="modal-box" autoComplete="off" onSubmit={(e) => e.preventDefault()}>

                    <h1 className="font-bold text-2xl lg:text-3xl">{isEditing ? "Edit Menu" : "Add Menu"}</h1>
                    
                    <section className="input-container flex flex-col-reverse relative">
                        <Textfield props={{type: 'text', name: 'product-name'}} value={menuName} onChange={(e) => setMenuName(e.target.value)}/>
                        <Label props={{name: 'product-name', labelContent: 'Product Name'}} />
                    </section>

                    {/* <div className="form-control">
                        <textarea value={menuDesc} id="product-desc" name="product-desc" onChange={(e) => setMenuDesc(e.target.value)} 
                        className="textarea border-pnc textarea-bordered focus:ring-1 ring-pnc" placeholder="Product Description" required></textarea>
                    </div> */}
                    
                    <section className="input-container flex flex-col-reverse relative">
                        <Textfield props={{type: 'number', name: 'product-price'}} value={price} onChange={(e) => setPrice(e.target.value)}/>
                        <Label props={{name: 'product-price', labelContent: 'Product Price'}} />
                    </section>

                    <section className="flex items-center gap-3 my-2">
                        <label htmlFor="availability">{isAvailable ? "Avaliable" : "Not Available"}</label>
                        <input type="checkbox" value={isAvailable} onChange={() => setAvailability(!isAvailable)} name="availability" id="availability" checked={isAvailable}/>
                    </section>

                    <input type="file" name="image" id="image" />
                    
                    <div className="modal-action">
                        <ModalButton htmlFor="menu-modal" className="admin-sidebar-btn" text={isEditing ? "Edit" : "Add"} 
                        
                        onClick={ !isEditing ? () => {

                            // This is the function when the user is adding a new menu.
                                addMenu()
                                setMenuName('')
                                setAvailability(false)
                                setPrice(0)
                                setMenuID('')
                            } : () => {
                            
                            // This is the function when the user is adding a new menu.
                                update()
                                setMenuName('')
                                setAvailability(false)
                                setPrice(0)
                                setMenuID('')
                                setEditing(false)
                            }
                        }/>
                        <ModalButton htmlFor="menu-modal" className="admin-sidebar-btn modal-button" text="Close" onClick={() => { 
                            setEditing(false)
                            setMenuName('')
                            setPrice(0)
                            setMenuID('')
                            setAvailability(false)
                        }}/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProductModal
