import React, {useState, useEffect, useContext} from 'react'
import {AdminMenuContext} from '../contexts/AdminMenuContext'
import AddProductModal from '../components (admin)/AddProductModal'
import DeleteModal from '../components (admin)/DeleteModal'
import ModalButton from '../components (admin)/ModalButton'

function MenuPage() {

    const {menuID, setMenuID, setEditing, menu, setMenuList} = useContext(AdminMenuContext)
    const [menuToBeDeleted, setMenuToBeDeleted] = useState('')
    /** A useEffect that runs whenever an admin adds, updates, deletes 
     * new data to fetch updated menus in the database */
    useEffect(() => {

        fetch('http://localhost:3001/get-menu', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({order: 'menu'}) // set the ORDER BY parameter in sql command at server (get-menu route).
        })
        .then(res => res.json())
        .then(data => {
            setMenuList(JSON.parse(data))
        }).catch(err => console.log(err))

    }, [menu, menuID]) // triggers when this two dependencies are change.

    /** A function that formats the price into Philippine Peso */
    const formattedPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(price)
    }

    return (
        <div className="row-start-3 row-end-5 col-start-1 col-end-5 px-10">


            <div className="flex justify-between items-center">
                <h1 className="text-pnc font-bold text-2xl lg:text-4xl py-2">Menu</h1>
                <ModalButton htmlFor="menu-modal" className="admin-sidebar-btn modal-button" text="Add Menu"/>
                <AddProductModal />
            </div>

            <div className=" lg:row-start-2 col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 overflow-y-auto border table-height">
                
                <table className="table w-full relative table-zebra">
                    <thead className="relative">
                            
                            <th className="table-headers">Menu ID</th>
                            <th className="table-headers">Menu</th>
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
                                        <th className="font-mono">{prod.menu_id}</th>
                                        <td className="font-bold text-pnc">{prod.menu}</td>
                                        {/* <td><Button className="button" text="Product Info"/></td> */}
                                        <td className="font-mono text-xl font-bold">{formattedPrice(prod.menu_price)}</td>
                                        <td className={prod.status === '1' ? "text-green-500 font-medium" : "text-red-500 font-medium"}>{prod.status === '1' ? "Available" : "Not Available"}</td>
                                        <td>
                                            {/* Edit Button
                                                This will show up the
                                                <AddProductModal/> component.
                                            */}
                                            <ModalButton onClick={() => {
                                                
                                                /** We invoke this to know that the
                                                 * admin wants to edit.
                                                 * 
                                                 * this will evaluate what data should be
                                                 * changed in the modal.
                                                 */
                                                setEditing(true)
                                                /** We set the menu id to
                                                 * trigger the useEffect at
                                                 * MenuPage (Admin Context)
                                                 * for the fetching of necessary information
                                                 * for editing the menu. */
                                                setMenuID(prod.menu_id)
                                            }} htmlFor="menu-modal" className="admin-edit-btn modal-button" text="Edit"/>
                                        </td>
                                        <td>
                                            {/* Delete Button 
                                                This will show up the 
                                                <DeleteModal/> component.
                                            */}
                                            <ModalButton onClick={() => {

                                                setMenuToBeDeleted(prod.menu)
                                                setMenuID(prod.menu_id)
                                            }} htmlFor="delete-modal" className="admin-delete-btn modal-button" text="Delete"/>
                                            {/* The modal that pops up when the Delete button is clicked */}
                                            <DeleteModal menu={menuToBeDeleted}/> 
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
