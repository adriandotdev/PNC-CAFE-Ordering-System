import React from 'react'
import InputContainer from '../components (admin)/AdminNavbar'

function AddProductModal() {
    return (
        <>
            <label htmlFor="modal-1" className="admin-sidebar-btn modal-button">Add Product</label>
            <input type="checkbox" name="modal-1" id="modal-1" className="modal-toggle" />
            <div className="modal ">
                
                <div className="modal-box">

                    <h1 className="font-bold text-2xl lg:text-3xl">Add Product</h1>

                    <InputContainer name="prod-name" type="text" labelContent="Product Name"/>
                    
                    <div className="form-control">
                        <textarea className="textarea border-pnc textarea-bordered focus:ring-1 ring-pnc" placeholder="Product Description"></textarea>
                    </div>

                    <InputContainer name="price" type="number" labelContent="Price"/>

                    <InputContainer name="items" type="number" labelContent="No. of items"/>
                    <div className="modal-action">
                        <label htmlFor="modal-1" className="admin-sidebar-btn modal-button">Add</label>
                        <label htmlFor="modal-1" className="admin-sidebar-btn modal-button">Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProductModal
