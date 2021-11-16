import React, {useState} from 'react'
import {customer} from '../test/customer'
import AddProductModal from '../components (admin)/AddProductModal'
import DeleteModal from '../components (admin)/DeleteModal'
import ModalButton from '../components (admin)/ModalButton'
import Button from '../components/Button'

function MenuPage() {

    const [isEditing, setEditing] = useState(false);

    return (
        <div className="row-start-3 row-end-3 col-start-1 col-end-5 lg:col-start-2 lg:row-start-1 lg:row-end-1">
            <div className="flex justify-center items-center py-2 lg:justify-start">
                <h1 className="p-3 pl-1 font-medium md:text-lg lg:text-2xl">Menu</h1>


                <ModalButton htmlFor="menu-modal" className="admin-sidebar-btn modal-button" text="Add Menu"/>
                <AddProductModal isEditing={isEditing} setEditing={setEditing}/>
            </div>

            <div className="lg:row-start-2 col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 overflow-y-auto border table-height">
                
                <table className="table w-full relative ">
                    <thead className="relative">
                            
                            <th className="hidden"></th>
                            <th className="table-headers">Menu ID</th>
                            <th className="table-headers">Menu</th>
                            <th className="table-headers">Description</th>
                            <th className="table-headers">Price</th>
                            <th className="table-headers">Edit</th>
                            <th className="table-headers">Delete</th>
                    </thead>

                    {/* Actual Data */}
                    <tbody className="overflow-y-auto">
                        {
                            customer.map((cust, index) => {
                                return (
                                    <tr key={index} className="hover">
                                        <th className="hidden"></th>
                                        <th>{cust.idNumber}</th>
                                        <td>Caldereta</td>
                                        <td><Button className="button" text="Product Info"/></td>
                                        <td>$3.00</td>
                                        <td>
                                            {/* Edit Button */}
                                            <ModalButton onClick={() => setEditing(true)} htmlFor="menu-modal" className="admin-edit-btn modal-button" text="Edit"/>
                                        </td>
                                        <td>
                                            {/* Delete Button */}
                                            <ModalButton htmlFor="delete-modal" className="admin-delete-btn modal-button" text="Delete"/>
                                            {/* The modal that pops up when the Delete button is clicked */}
                                            <DeleteModal /> 
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                {/* <AddProductModal htmlFor={"modal-1"}/> */}
            </div>
        </div>
    )
}

export default MenuPage
