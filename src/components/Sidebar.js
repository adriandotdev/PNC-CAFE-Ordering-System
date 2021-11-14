import React from 'react'
import {Link} from 'react-router-dom'
import InputContainer from './InputContainer'
import Button from './Button'
// row-start-1 col-start-1 col-end-5 grid grid-flow-col place-items-center place-content-center
function Sidebar() {
    return (
        <div className="max-h-min flex flex-wrap justify-center w-screen gap-5 p-3  lg:shadow-none lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4 lg:grid-flow-row lg:max-w-min lg:place-content-start">

            <Link to="/admin/transactions" className="admin-sidebar-btn w-28">Transactions</Link>
            <Link to="/admin/users" className="admin-sidebar-btn w-28">Users</Link>
            <Link to="/admin/menu" className="admin-sidebar-btn w-28">Menu</Link>
            {/* <AddProductModal /> */}
            {/* <label htmlFor="modal-1" className="admin-sidebar-btn modal-button">Add Menu</label>
            <input type="checkbox" name="modal-1" id="modal-1" className="modal-toggle" />
            <div className="modal ">
                
                <div className="modal-box">

                    <h1 className="font-bold text-2xl lg:text-3xl">Add Menu</h1>

                    <InputContainer name="prod-name" type="text" labelContent="Product Name"/>
                    
                    <div className="form-control">
                        <textarea className="textarea border-pnc textarea-bordered focus:ring-1 ring-pnc" placeholder="Product Description"></textarea>
                    </div>

                    <InputContainer name="price" type="number" labelContent="Price"/>

                    <InputContainer name="items" type="number" labelContent="No. of items"/>
                    <div className="modal-action">
                        <Button className="admin-sidebar-btn" text="Add" />
                        <label htmlFor="modal-1" className="admin-sidebar-btn modal-button">Close</label>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar

/**
 * 
 * 
 * 
 * <section className="max-w-min">
                <button className="admin-drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </section>
            
            <section className="max-w-min z-20">
                <button className="admin-drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                
            </section>
            
            <section className="max-w-min z-10">
                <button className="admin-drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </button>
                
            </section>
 * 
 * 
 */