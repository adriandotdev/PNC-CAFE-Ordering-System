import React from 'react'
import {customer} from '../test/customer'
import Sidebar from '../components/Sidebar'

function AdminPage() {

    return (
        <div className="main-content lg:h-full lg:sticky">
            
            <Sidebar />

            <div className="row-start-2 row-end-2 col-start-1 lg:col-start-2 lg:row-start-1 lg:row-end-1">
                <h1 className="p-3 font-medium md:text-lg lg:text-2xl">Customers</h1>
            </div>

            <div className="lg:row-start-2 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3 overflow-y-auto max-h-96 border">
                
                <table className="table table-compact w-full relative">
                    <thead className="sticky z-10 top-0 w-full">
                        <th>ID Number</th>
                        <th>Given Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody className="overflow-y-auto">
                        {
                            customer.map(cust => {
                                return (
                                    <tr className="hover">
                                        <th>{cust.idNumber}</th>
                                        <td>{cust.givenName}</td>
                                        <td>Lauriano</td>
                                        <td>Marcelo</td>
                                        <td>email@gmail.com</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                    <tfoot className="sticky top-auto left-0 right-0">
                        <th>ID Number</th>
                        <th>Given Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default AdminPage