import React, {useState} from 'react'
import Textfield from '../components/Textfield'
import Label from '../components/Label'
import Button from '../components/Button';
import ModalButton from './ModalButton'

function AddProductModal({isEditing, setEditing}) {

    const [menu, setMenu] = useState('');
    const [menuDesc, setMenuDesc] = useState(''); // menu description
    const [price, setPrice] = useState(0);

    /**
     * Dito ay mag po-POST request ka
     * para mag add ng new menu.
     * 
     * then pag mag eedit ka mag po-POST request ka din
     */
    return (
        <>
            
            <div className="modal ">
                
                <form className="modal-box">

                    <h1 className="font-bold text-2xl lg:text-3xl">{isEditing ? "Edit Product" : "Add Product"}</h1>
                    
                    <section className="input-container flex flex-col-reverse relative">
                        <Textfield props={{type: 'text', name: 'product-name'}} value={menu} onChange={(e) => setMenu(e.target.value)}/>
                        <Label props={{name: 'product-name', labelContent: 'Product Name'}} />
                    </section>

                    <div className="form-control">
                        <textarea value={menuDesc} onChange={(e) => setMenuDesc(e.target.value)} 
                        className="textarea border-pnc textarea-bordered focus:ring-1 ring-pnc" placeholder="Product Description" required></textarea>
                    </div>

                    <section className="input-container flex flex-col-reverse relative">
                        <Textfield props={{type: 'number', name: 'product-price'}} value={price} onChange={(e) => setPrice(e.target.value)}/>
                        <Label props={{name: 'product-price', labelContent: 'Product Price'}} />
                    </section>

                    <div className="modal-action">
                        <Button className="admin-sidebar-btn" text={isEditing ? "Edit" : "Add"}/>
                        <ModalButton htmlFor="menu-modal" className="admin-sidebar-btn modal-button" text="Close" onClick={() => { 
                            setEditing(false)
                        }}/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProductModal
