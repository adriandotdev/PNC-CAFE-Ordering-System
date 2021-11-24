import React, {useEffect, useContext} from 'react'
import {AdminMenuContext} from '../contexts/AdminMenuContext'
import AddProductModal from '../components (admin)/AddProductModal'
import DeleteModal from '../components (admin)/DeleteModal'
import ModalButton from '../components (admin)/ModalButton'

function MenuPage() {

    const {menuID, setMenuID, setEditing, menu, setMenuList} = useContext(AdminMenuContext)

    /** A useEffect that runs whenever an admin adds, updates, deletes 
     * new data to fetch updated menus in the database */
    useEffect(() => {

        fetch('http://localhost:3001/get-menu')
        .then(res => res.json())
        .then(data => {
            setMenuList(JSON.parse(data))
        }).catch(err => console.log(err))
    }, [menu, menuID])

    return (
        <div className="row-start-3 row-end-3 col-start-1 col-end-5 lg:col-start-2 lg:row-start-1 lg:row-end-1">


            <div className="flex justify-center items-center py-2 lg:justify-start">
                <h1 className="p-3 pl-1 font-medium md:text-lg lg:text-2xl">Menu</h1>
                <ModalButton htmlFor="menu-modal" className="admin-sidebar-btn modal-button" text="Add Menu"/>
                <AddProductModal />
            </div>

            <div className="lg:row-start-2 col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 overflow-y-auto border table-height">
                
                <table className="table w-full relative ">
                    <thead className="relative">
                            
                            <th className="table-headers">Menu ID</th>
                            <th className="table-headers">Menu</th>
                            {/* <th className="table-headers">Description</th> */}
                            <th className="table-headers">Price</th>
                            <th className="table-headers">Status</th>
                            <th className="table-headers">Edit</th>
                            <th className="table-headers">Delete</th>
                    </thead>

                    {/* Actual Data */}
                    <tbody className="overflow-y-auto">
                        {
                            menu.map((prod) => {
                                return (
                                    <tr key={prod.menu_id} className="hover">
                                        <th className="hidden"></th>
                                        <th>{prod.menu_id}</th>
                                        <td>{prod.menu}</td>
                                        {/* <td><Button className="button" text="Product Info"/></td> */}
                                        <td>${prod.menu_price}</td>
                                        <td className={prod.status === '1' ? "text-green-500 font-medium" : "text-red-500 font-medium"}>{prod.status === '1' ? "Available" : "Not Available"}</td>
                                        <td>
                                            {/* Edit Button */}
                                            <ModalButton onClick={() => {

                                                setEditing(true)
                                                setMenuID(prod.menu_id)
                                            }} htmlFor="menu-modal" className="admin-edit-btn modal-button" text="Edit"/>
                                        </td>
                                        <td>
                                            {/* Delete Button */}
                                            <ModalButton onClick={() => setMenuID(prod.menu_id)} htmlFor="delete-modal" className="admin-delete-btn modal-button" text="Delete"/>
                                            {/* The modal that pops up when the Delete button is clicked */}
                                            <DeleteModal /> 
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MenuPage
